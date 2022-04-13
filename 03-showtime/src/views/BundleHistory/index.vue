<script setup lang="ts">
import { ref } from "vue";
import IIFE from "@assets/IIFE.png";
import ModuleDemo from "@assets/module-demo.png";
import Webpack01 from "@assets/webpack-01.png";
import Webpack02 from "@assets/webpack-02.png";

const IIFEVisible = ref(false);
const showIIFE = () => {
  IIFEVisible.value = true;
};

const moduleVisible = ref(false);
const showModule = () => {
  moduleVisible.value = true;
};
</script>

<template>
  <div class="bundle-history">
    <h1>构建发展史</h1>

    <h2 class="left-second-title">无构建时代</h2>
    <el-row class="oneScreen" :gutter="40">
      <el-col :span="10" :offset="1" data-aos="fade-right" data-aos-delay="500">
        <h4>
          在网页开发的早期，javascript
          作为一种脚本语言，主做一些简单的表单验证或动画实现等，那个时候代码还是很少的。那个时候的代码是怎么写的呢？直接将代码写在、script
          标签中即可。随着ajax异步请求的出现，慢慢形成了前后端的分离，客户端需要完成的事情越来越多，代码量也是与日俱增。为了应对代码量的剧增，我们通常会将代码组织在多个
          javascript
          文件中，进行维护。但是这种维护方式，依然不能避免一些灾难性的问题。比如全局变量同名问题，我们的前辈们也提出了非常多的方案，比如
        </h4>
        <ul>
          <li @click="showIIFE">
            - IIFE —— 每个文件都是一个 IIFE
            这样做能解决全局变量同名问题，但也使得全局变量失效
          </li>
          <li @click="showModule">
            - 模块化 —— CJS、AMD 和 ESM
            能够解决所有的问题也是行业的标准做法，但咱们的 javascript
            从一出生就没考虑过原来自己能成长到如此地步，也就是说，它天生就不支持模块化
          </li>
        </ul>
      </el-col>
      <el-col :span="10">
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

    <h2 class="right-second-title">全构建时代</h2>
    <el-row class="oneScreen" :gutter="160">
      <el-col data-aos="fade-left" data-aos-delay="500" :offset="1" :span="10">
        <div style="margin-top: 30vh"></div>
        <h4>
          2012 年 3 月10 号，这可是个伟大的日子，Tobias 创造了
          webpack，也标志着前端进入模块化开发的时代，这里我称它为全构建，为何如此。
        </h4>
        <p class="ps">
          前端构建工具不止
          webpack，但它是最受欢迎的，因此，为了便于撰写和阅读，下文构建工具统称为
          webpack
        </p>
        <h4>
          因为，不论是开发环境还是生成环境，只要是模块化开发，代码都需要经过
          webpack 构建才能在浏览器中展现。
        </h4>
        <h4>
          webpack 几乎完美的支持了前端模块化开发，也提出了非常多的创新，比如
          HMR，但 webpack
          有一个无法解决的问题，即大型项目构建缓慢，特别是在开发时，面临一个大型的项目，启动时花费
          5 - 10 分钟非常常见（M1 阔能要快点），相信下面这张图大家非常熟悉。
        </h4>
        <el-image :src="Webpack02" />
      </el-col>
      <el-col :span="10" data-aos="fade-right" data-aos-delay="500">
        <h4>
          既然 javascript 底层不支持，那就借助于工具。模块化开发 ——
          CJS、AMD、ESM，然后再经过工具处理，处理成能够在 js
          引擎上运行的代码。那么工具处理这一过程，也就是常说的打包
        </h4>
        <p class="ps">
          大部分情况下 js
          是运行在浏览器中，因此，为了便于撰写和阅读，下文将能够运行 js
          代码的引擎统称为浏览器
        </p>
        <el-image :src="Webpack01" />
      </el-col>
    </el-row>

    <h2 class="left-second-title">半构建时代</h2>
    <el-row class="oneScreen" :gutter="160">
      <el-col :span="10" data-aos="fade-right" data-aos-delay="500">
        能不能不构建呀？ 由此，我们的 vite 就应运而生
      </el-col>
    </el-row>
  </div>
</template>

<style scope lang="scss">
.bundle-history {
  text-align: justify;
  padding: 0 100px;
  h1 {
    text-align: center;
    margin-bottom: 400px;
  }
}
</style>
