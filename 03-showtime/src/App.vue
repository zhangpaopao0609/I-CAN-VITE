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
    <ViteVite />
    <ItIsTime />
    <More />
    <Thanks />
  </section>
</template>

<style lang="scss">
.oneScreen {
  height: 100vh;
}

.left-second-title {
  text-align: left;
  margin-left: 100px;
}

.right-second-title {
  text-align: right;
  margin-right: 100px;
}

.ps {
  color: #999;
}

.twocolum-layout {
  display: flex;
  justify-content: space-around;
  align-items: center;

  .code {
    width: 40%;
  }
}
</style>
