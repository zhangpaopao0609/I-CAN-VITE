<script setup lang="ts">
import { ref } from "vue";
import YKY02 from "@assets/yyx-02.png";

const assetsVisible = ref(false);
const handleAssetsVisible = () => {
  assetsVisible.value = true;
};
</script>

<template>
  <div class="more">
    <h1 class="first-title">未完待续</h1>

    <h2 class="left-second-title">多包依赖</h2>
    <el-row class="oneScreen" justify="center" :gutter="140">
      <el-col
        :span="10"
        :offset="1"
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-duration="1500"
      >
        <el-image style="transform: scale(1.6)" :src="YKY02" />
      </el-col>
    </el-row>

    <h2 class="left-second-title">静态资源</h2>
    <el-row class="oneScreen" justify="center" :gutter="140">
      <el-col
        :span="10"
        :offset="1"
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-duration="1500"
      >
        <h3 class="cursor" @click="handleAssetsVisible">
          import logo from "../assets/logo.png"
        </h3>
        <h3 style="margin-top: 40px" v-if="assetsVisible" data-aos="zoom-in">
          返回 js 文件： export default 资源对应的路径;
        </h3>
      </el-col>
    </el-row>

    <h2 class="left-second-title">非 ESM 依赖</h2>
    <el-row class="oneScreen" justify="center" :gutter="140">
      <el-col
        :span="10"
        :offset="1"
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-duration="1500"
      >
        <h3>依赖预构建， 将所有非 ESM 依赖项转换为 ESM</h3>
      </el-col>
    </el-row>
  </div>
</template>

<style scope lang="scss">
.more {
  margin-top: 400px;
  text-align: justify;
  padding: 0 100px;
}
</style>
