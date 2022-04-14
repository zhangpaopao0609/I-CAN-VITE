<script setup lang="ts">
import { ref } from "vue";
import YKY02 from "@assets/yyx-02.png";
</script>

<template>
  <div class="more">
    <h1>未完待续</h1>

    <h2 class="left-second-title">多包依赖</h2>
    <el-row class="oneScreen" justify="center" :gutter="140">
      <el-col
        :span="10"
        :offset="1"
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-duration="1500"
      >
        <el-image :src="YKY02" />
      </el-col>
    </el-row>

    <h2 class="left-second-title">循环依赖</h2>
    <el-row class="oneScreen" justify="center" :gutter="140">
      <el-col
        :span="10"
        :offset="1"
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-duration="1500"
      >
        <el-image :src="YKY02" />
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
        <el-image :src="YKY02" />
      </el-col>
    </el-row>

    <h2 class="left-second-title">生成环境构建</h2>
    <el-row class="oneScreen" justify="center" :gutter="140">
      <el-col
        :span="10"
        :offset="1"
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-duration="1500"
      >
        <el-image :src="YKY02" />
      </el-col>
    </el-row>
  </div>
</template>

<style scope lang="scss">
.more {
  text-align: justify;
  padding: 0 100px;
  h1 {
    text-align: center;
    margin-bottom: 400px;
  }
}
</style>
