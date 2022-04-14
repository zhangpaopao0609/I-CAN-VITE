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

const esmQVisible = ref(false);
const handleEsmQ = () => {
  esmQVisible.value = true;
};

const esmAVisible = ref(false);
const handleEsmA = () => {
  esmAVisible.value = true;
};

const getNodeModule0Visible = ref(false);
const handleGetNodeModule0 = () => {
  getNodeModule0Visible.value = true;
};
const getNodeModule1Visible = ref(false);
const handleGetNodeModule1 = () => {
  getNodeModule1Visible.value = true;
};
const getNodeModule2Visible = ref(false);
const handleGetNodeModule2 = () => {
  getNodeModule2Visible.value = true;
};
</script>

<template>
  <div class="it-is-time">
    <h1 class="first-title">动动小拇指写起来</h1>

    <h2 class="left-second-title">Native ESM</h2>
    <el-row class="oneScreen" :gutter="60">
      <el-col
        :span="6"
        :offset="1"
        data-aos="flip-left"
        data-aos-delay="500"
        data-aos-duration="1500"
      >
        <h4 class="cursor" @click="handleEsmQ">
          当 script 标签中添加 type = module 时， 支持 ESM 语法
        </h4>
        <h4
          class="cursor"
          v-if="esmQVisible"
          data-aos="zoom-in"
          @click="handleEsmA"
        >
          究竟是怎么实现的呢？
        </h4>
        <h4 v-if="esmAVisible" data-aos="zoom-in">
          原来是每一个 import 都会向服务器发起网络请求
        </h4>
      </el-col>
      <el-col
        :span="16"
        data-aos="flip-right"
        data-aos-delay="500"
        data-aos-duration="1500"
      >
        <CodeSanBox
          src="https://codesandbox.io/embed/01-esm-can-nmkwpg?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark"
        />
      </el-col>
    </el-row>

    <h2 class="do-every-to-js" data-aos="zoom-in" data-aos-delay="500">
      想尽一切办法把返回给浏览器的响应转成 js
    </h2>

    <h2 class="right-second-title">本地服务</h2>
    <el-row class="oneScreen" style="margin-bottom: 300px" :gutter="130">
      <el-col
        data-aos="flip-left"
        data-aos-delay="500"
        data-aos-duration="1500"
        :offset="1"
        :span="16"
      >
        <CodeSanBox
          style="margin-bottom: 100px"
          src="https://codesandbox.io/embed/spring-sky-no0v60?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fapp.js&theme=dark"
        />
        <CodeSanBox
          src="https://codesandbox.io/embed/02-koa-js-vtn5qg?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fapp.js&theme=dark"
        />
      </el-col>
      <el-col
        :span="6"
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
    <el-row class="oneScreen" :gutter="60">
      <el-col
        data-aos="flip-right"
        data-aos-delay="500"
        data-aos-duration="1500"
        :span="9"
      >
        <h3 class="cursor" @click="handleGetNodeModule0">
          如何获取到依赖文件？
        </h3>
        <h3
          v-if="getNodeModule0Visible"
          class="cursor"
          @click="handleGetNodeModule1"
          data-aos="flip-right"
        >
          1. import { createApp } from "vue";
        </h3>
        <h3
          v-if="getNodeModule1Visible"
          class="cursor"
          @click="handleGetNodeModule2"
          data-aos="flip-right"
        >
          2. import { createApp } from "/@modules/vue";
        </h3>
        <h3 v-if="getNodeModule2Visible" data-aos="flip-right">
          3. 去对应的 node_modules 里面找即可
        </h3>
      </el-col>
      <el-col
        :span="14"
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
    <h3 style="text-align: right">还是那句话：搞成 js</h3>
    <el-row :gutter="80" style="margin-bottom: 200px">
      <el-col
        data-aos="flip-left"
        data-aos-delay="500"
        data-aos-duration="1500"
        :span="16"
      >
        <CodeSanBox
          src="https://codesandbox.io/embed/04-koa-css-wry240?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fjs%2Findex.js&theme=dark"
        />
      </el-col>
      <el-col
        :span="6"
        data-aos="flip-right"
        data-aos-delay="500"
        data-aos-duration="1500"
      >
        <h4>css 文件 -》 搞成 js</h4>
      </el-col>
    </el-row>
    <el-row :gutter="80">
      <el-col
        data-aos="flip-left"
        data-aos-delay="500"
        data-aos-duration="1500"
        :span="16"
      >
        <CodeSanBox
          src="https://codesandbox.io/embed/05-koa-vue-2bt2y9?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fjs%2Findex.js&theme=dark"
        />
      </el-col>
      <el-col
        :span="6"
        data-aos="flip-right"
        data-aos-delay="500"
        data-aos-duration="1500"
      >
        <h4>vue 文件 -》 搞成 js</h4>
      </el-col>
    </el-row>
  </div>
</template>

<style scope lang="scss">
.it-is-time {
  text-align: justify;
  padding: 0 60px;

  .do-every-to-js {
    height: 100vh;
    line-height: 100vh;
    vertical-align: middle;
    text-align: center;
    font-size: 40px;
    letter-spacing: 4px;
  }
}
</style>
