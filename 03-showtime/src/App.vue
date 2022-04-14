<script setup lang="ts">
import Welcome from "./views/Welcome/index.vue";
import Start from "./views/Start/index.vue";
import BundleHistory from "./views/BundleHistory/index.vue";
import ViteVite from "./views/ViteVite/index.vue";
import ItIsTime from "./views/ItIsTime/index.vue";
import More from "./views/More/index.vue";
import Thanks from "./views/Thanks/index.vue";
</script>

<template>
  <section class="container">
    <Welcome />
    <Start />
    <BundleHistory />
    <!-- <ViteVite />
    <ItIsTime />
    <More />
    <Thanks /> -->
  </section>
</template>

<style lang="scss">
#app {
  font-size: 18px;
}

.oneScreen {
  margin-top: 20vh;
  height: 80vh;
  line-height: 24px;
}

.oneScreenNoMargin {
  height: 100vh;
}

.left-second-title {
  text-align: left;
  margin-bottom: 50px;
}

.right-second-title {
  text-align: right;
  margin-bottom: 50px;
}

.ps {
  font-size: 14px;
  color: #999;
}

.cursor {
  cursor: pointer;
}

.first-title {
  font-size: 60px;
  text-align: center;
  margin-bottom: 100px;
  letter-spacing: 10px;
}
</style>
