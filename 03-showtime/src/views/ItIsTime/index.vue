<script setup lang="ts">
import { ref } from "vue";
import Vite01 from "@assets/vite-01.png";

import CodeSanBox from "../../components/CodeSanBox.vue";

const ESMVisible = ref(false);
const loading = ref(true);
const showESMImport = () => {
  ESMVisible.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
</script>

<template>
  <div class="it-is-time">
    <h1>动动小拇指写起来</h1>

    <h2 class="left-second-title">原生 ESM 的根本</h2>
    <el-row class="oneScreen" :gutter="140">
      <el-col
        :span="10"
        :offset="1"
        data-aos="flip-left"
        data-aos-delay="500"
        data-aos-duration="1500"
      >
        <h4>
          当 `script` 标签中添加 `type = module` 时， 可以支持 js 中 `import`
          语法，比如
        </h4>
        <h4>
          既然每一个 import
          都会发起一个网络请求，也就是向服务器要东西，那家伙服务器就可以做很多东西了，你不是只能接收
          js 文件嘛，我把啥都给你转成 js
        </h4>
      </el-col>
      <el-col
        :span="10"
        data-aos="flip-right"
        data-aos-delay="500"
        data-aos-duration="1500"
      >
        <CodeSanBox
          src="https://codesandbox.io/embed/01-esm-can-nmkwpg?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark"
        />
      </el-col>
      <h2>想尽一切办法把返回给浏览器的响应转成 js</h2>
    </el-row>

    <h2 class="right-second-title">本地服务</h2>
    <el-row class="oneScreen" :gutter="130">
      <el-col
        data-aos="flip-left"
        data-aos-delay="500"
        data-aos-duration="1500"
        :offset="3"
        :span="10"
      >
        <CodeSanBox
          src="https://codesandbox.io/embed/spring-sky-no0v60?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fapp.js&theme=dark"
        />
        <CodeSanBox
          src="https://codesandbox.io/embed/02-koa-js-vtn5qg?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fapp.js&theme=dark"
        />
      </el-col>
      <el-col
        :span="10"
        data-aos="flip-right"
        data-aos-delay="500"
        data-aos-duration="1500"
      >
        <h4>
          起一个本地服务，浏览器就向本地服务器要东西呗，好咧， vite 是基于 Koa
          做底层服务器的，我们也搞起
        </h4>
      </el-col>
    </el-row>

    <h2 class="left-second-title">解决依赖</h2>
    <el-row class="oneScreen" :gutter="130">
      <el-col
        data-aos="flip-right"
        data-aos-delay="500"
        data-aos-duration="1500"
        :offset="3"
        :span="10"
      >
        <h4>import axios from "axios"</h4>
        <h4>import axios from "/@modules/axios"</h4>
        <h4>去对应的 node_modules 里面找即可</h4>
      </el-col>
      <el-col
        :span="10"
        data-aos="flip-left"
        data-aos-delay="500"
        data-aos-duration="1500"
      >
        <CodeSanBox
          src="https://codesandbox.io/embed/03-koa-node-modules-ptvo6r?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Fapp.js&theme=dark"
        />
      </el-col>
    </el-row>

    <h2 class="right-second-title">非 js 文件</h2>
    <el-row class="oneScreen" :gutter="130">
      <el-col
        data-aos="flip-left"
        data-aos-delay="500"
        data-aos-duration="1500"
        :offset="3"
        :span="10"
      >
        <CodeSanBox
          src="https://codesandbox.io/embed/04-koa-css-wry240?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fjs%2Findex.js&theme=dark"
        />
        <CodeSanBox
          src="https://codesandbox.io/embed/05-koa-vue-2bt2y9?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fjs%2Findex.js&theme=dark"
        />
      </el-col>
      <el-col
        :span="10"
        data-aos="flip-right"
        data-aos-delay="500"
        data-aos-duration="1500"
      >
        <h4>一个字：搞成 js</h4>
        <h4>CSS 文件</h4>
        <h4>vue 文件</h4>
      </el-col>
    </el-row>
  </div>
</template>

<style scope lang="scss">
.it-is-time {
  text-align: justify;
  padding: 0 100px;
  h1 {
    text-align: center;
    margin-bottom: 400px;
  }
}
</style>
