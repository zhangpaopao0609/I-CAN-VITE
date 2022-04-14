<script setup lang="ts">
import { ref } from "vue";
import IIFE from "@assets/IIFE.png";
import ModuleDemo from "@assets/module-demo.png";
import Webpack01 from "@assets/webpack-01.png";
import Webpack02 from "@assets/webpack-02.png";
import Vite02 from "@assets/vite-02.png";

const IIFEVisible = ref(false);
const showIIFE = () => {
  IIFEVisible.value = true;
};

const moduleVisible = ref(false);
const showModule = () => {
  moduleVisible.value = true;
};

const webpack02Visible = ref(false);
const showWebpack02 = () => {
  webpack02Visible.value = true;
};

const vite02Visible = ref(false);
const showVite02 = () => {
  vite02Visible.value = true;
};
</script>

<template>
  <div class="bundle-history">
    <h1 class="first-title">构建发展史</h1>

    <el-row class="oneScreen no-bundle" :gutter="140">
      <el-col :span="14" :offset="1" data-aos="fade-right" data-aos-delay="500">
        <h2 class="left-second-title">无构建时代</h2>
        <h4>
          在网页开发的早期，javascript
          主做一些简单的表单验证或动画实现等，那时候直接将代码写在 script
          标签中即可。后来客户端需要完成的事情越来越多，代码量也是与日俱增。为了应对代码量的剧增，通常会将代码组织在多个
          javascript
          文件中。但是这种维护方式，难以避免一些灾难性的问题。比如全局变量同名问题，我们的前辈们也提出了非常多的方案，比如
        </h4>
        <ul class="des">
          <li @click="showIIFE" class="cursor">
            IIFE —— 每个文件都是一个 IIFE
            这样做能解决全局变量同名问题，但也使得全局变量失效
          </li>
          <li @click="showModule" class="cursor">
            模块化 —— 但咱们的 javascript
            从一出生就没考虑过自己能成长到如此地步，也就是说，它天生就不支持模块化
          </li>
        </ul>
      </el-col>
      <el-col :span="8">
        <el-image
          v-if="IIFEVisible"
          data-aos="fade-left"
          data-aos-delay="500"
          :src="IIFE"
        />
        <br />
        <el-image
          v-if="moduleVisible"
          data-aos="fade-left"
          data-aos-delay="500"
          :src="ModuleDemo"
        />
      </el-col>
    </el-row>

    <el-row class="oneScreen all-bundle" :gutter="100">
      <el-col :offset="1" :span="11">
        <div
          style="margin-top: 30vh"
          data-aos="fade-left"
          data-aos-delay="500"
          v-if="webpack02Visible"
        >
          <h4>
            2012 年 3 月 10 号，webpack 诞生
            ，标志着全面进入模块化开发，也意味着前段进入全构建时代。
          </h4>
          <p class="ps">
            前端构建工具不止
            webpack，但它是最受欢迎的，因此，为了便于撰写和阅读，下文构建工具统称为
            webpack
          </p>
          <h4>
            因为，不论是开发环境还是生成环境，只要是模块化开发，代码都需要经过
            webpack 构建才能在浏览器中运行。
          </h4>
          <h4>
            webpack 几乎完美的支持了前端模块化开发，也提出了非常多的创新，比如
            HMR，但 webpack
            有一个无法解决的问题，即大型项目构建缓慢，特别是在开发时，面临一个大型的项目，启动时花费
            5 - 10 分钟非常常见（M1 阔能要快点），相信下面这张图大家非常熟悉。
          </h4>
          <el-image :src="Webpack02" />
        </div>
      </el-col>
      <el-col :span="12" data-aos="fade-right" data-aos-delay="500">
        <h2 class="right-second-title">全构建时代</h2>
        <h3>构建工具便应运而生</h3>
        <h4>模块化开发 -》 工具构建 -》 js 引擎运行</h4>
        <p class="ps">
          大部分情况下 js
          是运行在浏览器中，因此，为了便于撰写和阅读，下文将能够运行 js
          代码的引擎统称为浏览器
        </p>
        <el-image class="cursor" @click="showWebpack02" :src="Webpack01" />
      </el-col>
    </el-row>

    <h2 class="left-second-title">下一个时代 ？</h2>
    <el-row class="oneScreen" :gutter="160">
      <el-col :span="10" :offset="2" data-aos="fade-right" data-aos-delay="500">
        <h3 class="cursor" @click="showVite02">
          能不能不构建呀？ 直接就能运行该多香呀！！
        </h3>
      </el-col>
      <el-col :span="8">
        <el-image
          v-if="vite02Visible"
          data-aos="fade-left"
          data-aos-delay="500"
          :src="Vite02"
        />
      </el-col>
    </el-row>
  </div>
</template>

<style scope lang="scss">
.bundle-history {
  text-align: justify;
  padding: 0 100px;

  .no-bundle {
    margin-bottom: 10vh;
    .des {
      li {
        margin-bottom: 50px;
      }
    }
  }

  .all-bundle {
    margin-bottom: 20vh;
  }
}
</style>
