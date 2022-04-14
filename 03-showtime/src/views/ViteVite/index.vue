<script setup lang="ts">
import { ref } from "vue";
import Import00 from "@assets/import-00.png";
import Vite02 from "@assets/vite-02.png";

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
  <div class="vite-vite">
    <h1 class="first-title">Vite 到底为什么这么 vite</h1>

    <el-row class="oneScreen advantage" :gutter="40">
      <el-col :span="9" :offset="1" data-aos="zoom-in-up" data-aos-delay="500">
        <h2 class="left-second-title">天时地利</h2>
        <h4>得益于浏览器支持 ESM，使得 javascript 在一定程度上支持了模块化</h4>
      </el-col>
      <el-col :span="13" data-aos="zoom-in-up" data-aos-delay="500">
        <el-image class="cursor" @click="showESMImport" :src="Import00" />
        <div v-if="ESMVisible" data-aos="zoom-in-up" data-aos-delay="500">
          <div v-loading="loading" class="code">
            <CodeSanBox
              src="https://codesandbox.io/embed/01-esm-can-nmkwpg?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark"
            />
          </div>
        </div>
      </el-col>
    </el-row>

    <h2 class="left-second-title">人和</h2>
    <h3 class="left-second-title">
      虽然主流的浏览器支持了
      ESM，但还远远无法满足项目模块化开发的需求，还存在很多的问题：
    </h3>
    <el-row style="margin-bottom: 200px" :gutter="60">
      <el-col data-aos="zoom-in-up" data-aos-delay="500" :offset="1" :span="6">
        <h4>不支持三方依赖</h4>
      </el-col>
      <el-col :span="16" data-aos="fade-right" data-aos-delay="500">
        <CodeSanBox
          src="https://codesandbox.io/embed/02-esm-cannot-module-q8i240?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
        />
      </el-col>
    </el-row>

    <el-row style="margin-bottom: 200px" :gutter="60">
      <el-col data-aos="zoom-in-up" data-aos-delay="500" :offset="1" :span="6">
        <h4>仅支持 “application/javascript” 文件</h4>
        <div class="ps">
          这里的 “application/javascript” 是指从服务端返回的
          **Content-Type**，并不指文件本身的格式，下文为了方便，统称为 js 文件
        </div>
      </el-col>
      <el-col :span="16" data-aos="fade-right" data-aos-delay="500">
        <CodeSanBox
          src="https://codesandbox.io/embed/02-esm-cannot-only-js-56bcdr?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
        />
      </el-col>
    </el-row>

    <el-row :gutter="60">
      <el-col data-aos="zoom-in-up" data-aos-delay="500" :offset="1" :span="10">
        <h4>浏览器仅支持标准格式</h4>
        <h4>
          其实不仅仅是 import 不支持除 js 外的其它文件，浏览器本身就仅仅认识
          html, css, js, jpg, mp4
          等标准格式的文件，一旦遇到其它格式的文件，即便是 import
          支持引入，浏览器也无法处理，比如 jsx、scss
        </h4>
        <div class="ps">
          浏览器仅支持标准文件是十分合理的，这里只是提出，在纯浏览器下实现模块化开发存在的问题
        </div>
      </el-col>
    </el-row>

    <el-row style="margin-top: 20vh" :gutter="60">
      <el-col :span="8">
        <el-image data-aos="fade-left" data-aos-delay="500" :src="Vite02" />
      </el-col>
      <el-col data-aos="zoom-in-up" data-aos-delay="500" :offset="1" :span="10">
        <h4>
          如果能够解决这些问题，再充分地利用浏览器支持 ESM
          这一特性，就完全可以实现开发时无构建。 vite
          就是完美的解决了这些问题，实现了开发时无需构建的效果
        </h4>
        <h3>总结：</h3>
        <ul>
          <li>1. 浏览器支持基本的 ESM</li>
          <li>2. vite 基于原生 ESM 提供丰富的内建功能</li>
        </ul>
        基于这两点， vite 实现了本地无构建开发体验
      </el-col>
    </el-row>
  </div>
</template>

<style scope lang="scss">
.vite-vite {
  text-align: justify;
  padding: 0 60px;
  line-height: 24px;

  .advantage {
    margin-bottom: 10vh;
  }
}
</style>
