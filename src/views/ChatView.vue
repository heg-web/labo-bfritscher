<template>
    <h1>{{ $route.params.name }}</h1>
    <button v-on:click="getData">Get Data</button>
    <div v-for="item in searchResults" :key="item.id">
        <img :src="item.url" />
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            searchResults: []
        };
    },
    methods: {
        getData() {
            axios
                .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${this.$route.params.name}`, {
                    headers: {
                        "x-api-key": "DEMO-API-KEY"
                    }
                })
                .then((response) => {
                    this.searchResults = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
};
</script>
