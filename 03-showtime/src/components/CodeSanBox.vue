<script setup lang="ts">
withDefaults(
  defineProps<{
    src: string;
    style?: string;
    title?: string;
    allow?: string;
    sandbox?: string;
  }>(),
  {
    style:
      "width: 100%;height: 500px;border: 1px solid #999;border-radius: 4px;overflow: hidden;",
    title: "I-can-vite",
    allow:
      "accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",
    sandbox:
      "allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts",
  }
);
</script>

<template>
  <iframe
    :src="src"
    :style="style"
    :title="title"
    :allow="allow"
    :sandbox="sandbox"
  ></iframe>
</template>

<style scoped lang="scss"></style>
