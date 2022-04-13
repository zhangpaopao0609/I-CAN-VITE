const Koa = require("koa");
const fs = require("fs");
const path = require("path");
const app = new Koa();

app.use((ctx) => {
  const { url } = ctx.request;
  if (url === "/") {
    const html = fs.readFileSync("./index.html", "utf-8");
    ctx.type = "text/html";
    ctx.body = html;
  } else {
    const js = fs.readFileSync(path.join(__dirname, url), "utf-8");
    ctx.type = "application/javascript";
    ctx.body = js;
  }
});

const port = 6090;
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`app start at ${port}`);
});
