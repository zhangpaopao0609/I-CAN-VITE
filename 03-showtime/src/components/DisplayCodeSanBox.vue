<script setup lang="ts">
import CodeSanBox from "./CodeSanBox";
withDefaults(
  defineProps<{
    src: string;
    style?: string;
    title: string;
    allow?: string;
    sandbox?: string;
  }>(),
  {
    style:
      "width: 100%;height: 500px;border: 1px solid #000;border-radius: 4px;overflow: hidden;",
    allow:
      "accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",
    sandbox:
      "allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts",
  }
);
</script>

<template>
  <div
    data-aos="fade-left"
    data-aos-delay="1000"
    data-aos-duration="1000"
  >
    <CodeSanBox
      src="https://codesandbox.io/embed/summer-breeze-5bb4y5?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&expanddevtools=1"
      title="01-demo-dynamic-import"
    />
  </div>
</template>

<style scoped lang="scss"></style>
