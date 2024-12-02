<template>
    <div>
        <h1>Cat</h1>
        <button @click="loadData">load</button>
        <img class="img-fluid" :src="img.url" v-for="img in apiReply" :key="img.id" />
    </div>
</template>
<script>
import axios from "axios";

export default {
    name: "CatView",
    data() {
        return {
            apiReply: [],
            dataLoaded: false,
            isLoading: false
        };
    },
    methods: {
        loadData: function () {
            this.isLoading = true;
            const promiseResult = axios.get("https://api.thecatapi.com/v1/images/search?limit=10");
            promiseResult.then((response) => {
                console.log("reponse");
                this.apiReply = response.data.concat(this.apiReply);
                this.dataLoaded = true;
                this.isLoading = false;
            });
            console.log("avant reponse");
        }
    }
};
</script>
<style scoped>
img {
    max-width: 100px;
}
</style>
