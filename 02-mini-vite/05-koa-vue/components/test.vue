<template>
  <div>
    <h1>this is vue test components</h1>
    <button @click="add">count: {{ count }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },

  methods: {
    add() {
      this.count += 1;
    },
  },
};
</script>
