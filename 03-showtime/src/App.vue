<script setup lang="ts">
import Welcome from "./views/Welcome/index.vue";
import Start from "./views/Start/index.vue";
import BundleHistory from "./views/BundleHistory/index.vue";
import ViteVite from "./views/ViteVite/index.vue";
import CodeSanBox from "./components/CodeSanBox.vue";
</script>

<template>
  <section class="container">
    <Welcome />
    <Start />
    <BundleHistory />
    <ViteVite />

    <div class="twocolum-layout">
      <div class="text" data-aos="fade-right">111</div>
      <div
        class="code"
        data-aos="fade-left"
        data-aos-delay="1000"
        data-aos-duration="1000"
      >
        <CodeSanBox
          src="https://codesandbox.io/embed/spring-sky-no0v60?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fapp.js&theme=dark"
        />
        <CodeSanBox
          src="https://codesandbox.io/embed/02-koa-js-vtn5qg?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fapp.js&theme=dark"
        />
        <CodeSanBox
          src="https://codesandbox.io/embed/03-koa-node-modules-ptvo6r?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Fapp.js&theme=dark"
        />
        <CodeSanBox
          src="https://codesandbox.io/embed/04-koa-css-wry240?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fjs%2Findex.js&theme=dark"
        />
        <CodeSanBox
          src="https://codesandbox.io/embed/05-koa-vue-2bt2y9?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fjs%2Findex.js&theme=dark"
        />
      </div>
    </div>
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
