<script setup lang="ts">
import { ref } from "vue";
import YYX01 from "../../assets/yyx-01.png";
import YYX03 from "../../assets/yyx-03.png";
import Vite02 from "../../assets/vite-02.png";

const yyx01Visible = ref(false);
const handleYyx01Visible = () => {
  yyx01Visible.value = true;
};
</script>

<template>
  <el-row class="oneScreen start" :gutter="140">
    <el-col :span="10" :offset="1" data-aos="fade-right" data-aos-delay="500">
      <h3>
        约莫 20 年 9 月份开始了解到 vite，我就试着去尝尝鲜，给了我两个感受
      </h3>
      <ul class="des">
        <li>简直丝滑 —— vite /vit/ quick</li>
        <li class="cursor" @click="handleYyx01Visible">
          webpack 已经完成了它的历史使命 —— 用尤大21年初在知乎上的一个回答来说
        </li>
      </ul>
    </el-col>
    <el-col
      v-if="yyx01Visible"
      :span="10"
      data-aos="fade-left"
      data-aos-delay="500"
    >
      <el-image style="transform: scale(1.4)" :src="YYX01" />
    </el-col>
  </el-row>

  <div class="oneScreen start-center" data-aos="fade-down" data-aos-delay="500">
    <h1>vite 也到了 2.9 版本，也备受越来越多的人所喜爱</h1>
    <div class="vite2_9" data-aos="fade-up" data-aos-delay="500">
      <el-image style="transform: scale(0.6)" :src="YYX03" />
    </div>
  </div>

  <div class="oneScreen start-center" data-aos="fade-down" data-aos-delay="500">
    <div class="vite2_9 vite02" data-aos="fade-up" data-aos-delay="500">
      <el-image style="transform: scale(0.6)" :src="Vite02" />
    </div>
  </div>
</template>

<style scope lang="scss">
.start {
  .des {
    li {
      line-height: 50px;
    }
  }
}

.start-center {
  text-align: center;
  align-items: center;

  h1 {
    margin-bottom: 200px;
  }
}

.vite2_9 {
  position: relative;
  top: -150px;
}

.vite02 {
  top: -200px;
}
</style>
