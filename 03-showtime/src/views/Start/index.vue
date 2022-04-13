<script setup lang="ts">
import YKY01 from "../../assets/yyx-01.png";
import YKY03 from "../../assets/yyx-03.png";
</script>

<template>
  <el-row class="start" :gutter="40">
    <el-col :span="10" :offset="1" data-aos="fade-right" data-aos-delay="500">
      <h3>
        vite 就是其一，约莫 2020 年 9 月份开始了解到 vite，当时 vue3
        也准备发布了，我就试着去尝尝鲜，给了我两个感受
      </h3>
      <ul>
        <li>简直丝滑 —— vite /vit/ quick</li>
        <li>
          webpack 已经完成了它的历史使命 —— 用尤大21年初在知乎上的一个回答来说
        </li>
      </ul>
    </el-col>
    <el-col :span="10" data-aos="fade-left" data-aos-delay="500">
      <el-image :src="YKY01" />
    </el-col>
  </el-row>

  <div class="start start-center" data-aos="fade-down" data-aos-delay="500">
    <h1>vite 也到了 2.9 版本，也备受越来越多的人所喜爱</h1>
    <div data-aos="fade-up" data-aos-delay="500">
      <el-image :src="YKY03" />
    </div>
  </div>
</template>

<style scope lang="scss">
.start {
  height: 100vh;
}

.start-center {
  text-align: center;

  h1 {
    margin-bottom: 200px;
  }
}
</style>
