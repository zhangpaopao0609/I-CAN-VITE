<script setup lang="ts">
import CodeSanBox from "./components/CodeSanBox.vue";
</script>

<template>
  <h1>Hello</h1>
  <div class="twocolum-layout">
    <div class="text" data-aos="fade-right">111</div>
    <div
      class="code"
      data-aos="fade-left"
      data-aos-delay="1000"
      data-aos-duration="1000"
    >
      <CodeSanBox
        src="https://codesandbox.io/embed/serene-pine-de8u84?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&initialpath=01-dynamic-import-can%2Findex.html&module=%2F01-dynamic-import-can%2Findex.html&theme=dark"
      />
    </div>
  </div>

  <div class="twocolum-layout">
    <div
      class="code"
      data-aos="fade-right"
      data-aos-delay="1000"
      data-aos-duration="1000"
    >
      <CodeSanBox
        src="https://codesandbox.io/embed/serene-pine-de8u84?autoresize=1&fontsize=14&hidenavigation=1&initialpath=%2F02-dynamic-import-cannot%2F01-module-cannot%2Findex.html&module=%2F02-dynamic-import-cannot%2F01-module-cannot%2Findex.html&theme=dark"
      />
    </div>
    <div class="text" data-aos="fade-left">111</div>
  </div>

  <div class="twocolum-layout">
    <div class="text" data-aos="fade-right">111</div>
    <div
      class="code"
      data-aos="fade-left"
      data-aos-delay="1000"
      data-aos-duration="1000"
    >
      <CodeSanBox
        src="https://codesandbox.io/embed/serene-pine-de8u84?autoresize=1&fontsize=14&hidenavigation=1&initialpath=%2F02-dynamic-import-cannot%2F02-only-js%2Findex.html&module=%2F02-dynamic-import-cannot%2F02-only-js%2Findex.html&theme=dark"
      />

      <CodeSanBox
        src="https://codesandbox.io/embed/i-can-vite-de8u84?fontsize=14&hidenavigation=1&module=%2F03-mini-vite%2Fapp.js&theme=dark"
      />

      
    </div>
  </div>
</template>

<style lang="scss">
.twocolum-layout {
  display: flex;
  justify-content: space-around;
  align-items: center;

  .code {
    width: 40%;
  }
}
</style>
