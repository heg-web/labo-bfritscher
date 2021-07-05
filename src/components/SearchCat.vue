<template>
  <div>
    <input v-model="query" /> <button v-on:click="search()">Search</button>
    <img class="cat" v-for="cat in resultats" v-bind:src="cat.url" v-bind:key="cat.id" />
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "search-cat",
  data() {
    return {
      query: "",
      resultats: [],
    };
  },
  methods: {
    search() {
      axios
        .get(
          "https://api.thecatapi.com/v1/images/search?order=RANDOM&limit=6",
          {
            headers: {
              "x-api-key": "DEMO-API-KEY",
            },
          }
        )
        .then((response) => {
          this.resultats = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style>
.cat {
  width: 300px;
}

</style>
