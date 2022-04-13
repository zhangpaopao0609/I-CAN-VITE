const Koa = require("koa");
const fs = require("fs");
const path = require("path");
const compilerSfc = require("@vue/compiler-sfc");
const compilerDom = require("@vue/compiler-dom");

const app = new Koa();

const rewriteImport = require("./utils/rewriteImport");

app.use((ctx) => {
  const { url, query } = ctx.request;
  if (url === "/") {
    let html = fs.readFileSync("./index.html", "utf-8");
    html = html.replace(
      "<script",
      `
        <script>
          window.process = { env: { NODE_ENV: 'dev' } }
        </script>
        <script
      `
    );
    ctx.type = "text/html";
    ctx.body = html;
  } else if (url.endsWith(".js")) {
    const p = path.join(__dirname, url);
    ctx.type = "application/javascript";

    const file = fs.readFileSync(p, "utf-8");
    // 1. 支持 npm 包的 import
    // import xx from 'vue' 替换成 import xx from '/@module/vue'
    console.log(rewriteImport(file));
    ctx.body = rewriteImport(file);
  } else if (url.startsWith("/@modules/")) {
    // 这个模块，不是本地文件，而是 node_modules 连查找
    const prefix = path.resolve(
      __dirname,
      "node_modules",
      url.replace("/@modules/", "")
    );
    const module = require(`${prefix}/package.json`).module;
    const file = fs.readFileSync(path.resolve(prefix, module), "utf-8");
    ctx.type = "application/javascript";
    ctx.body = rewriteImport(file);
  } else if (url.endsWith(".css")) {
    // 浏览器 import 仅支持 js，因此，将 css 转换成 js 即可
    const p = path.resolve(__dirname, url.slice(1));
    const file = fs.readFileSync(p, "utf-8");
    const content = `
      const css = "${file.replace(/\n/g, "")}";
      const style = document.createElement("style");
      style.innerHTML = css;
      style.setAttribute('type', 'text/css');
      document.head.appendChild(style);
      export default css;
    `;
    ctx.type = "application/javascript";
    ctx.body = content;
  } else if (url.indexOf(".vue") !== -1) {
    // import xx from 'xx.vue';
    // 1. 单文件组件解析
    const p = path.resolve(__dirname, url.split("?")[0].slice(1));
    // 解析单文件组件，需要官方的库   @vue/compiler-sfc
    const { descriptor } = compilerSfc.parse(fs.readFileSync(p, "utf-8"));
    if (!query.type) {
      // js内容
      ctx.type = "application/javascript";
      ctx.body = `
      ${rewriteImport(
        descriptor.script.content.replace(
          "export default ",
          "const __script = "
        )
      )};

import { render as __render } from "${url}?type=template";
__script.render = __render;
export default __script;
      `;
    } else if (query.type === "template") {
      // 解析我们的 template 变成 render 函数 @vue/compiler-dom
      const template = descriptor.template;
      const render = compilerDom.compile(template.content, {
        mode: "module",
      }).code;
      ctx.type = "application/javascript";
      ctx.body = rewriteImport(render);
    }
  }
});

const port = 6090;
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`app start at ${port}`);
});
