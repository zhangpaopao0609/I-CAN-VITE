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
        src="https://codesandbox.io/embed/summer-breeze-5bb4y5?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&expanddevtools=1"
        title="01-demo-dynamic-import"
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
        src="https://codesandbox.io/embed/02-demo-dynamic-import-cannot-n3p72k?autoresize=1&fontsize=14&hidenavigation=1&initialpath=%2F01-module-cannot%2Findex.html&theme=dark&expanddevtools=1"
        title="02-demo-dynamic-import-cannot"
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
        src="https://codesandbox.io/embed/02-demo-dynamic-import-cannot-n3p72k?autoresize=1&fontsize=14&hidenavigation=1&initialpath=%2F02-css-cannot%2Findex.html&theme=dark&expanddevtools=1"
        title="02-demo-dynamic-import-cannot"
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
