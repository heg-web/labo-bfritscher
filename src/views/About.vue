<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ $root.stateGlobal.uneValeur }}</p>
    <button v-on:click="$root.inc()">inc</button>
    {{ result }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      result: [],
    };
  },
  mounted() {
    this.getApiData();
  },
  methods: {
    getApiData() {
      setTimeout(() => {
        this.result = [1, 2, 3];
      }, 1000);
    },
  },
};
</script>
