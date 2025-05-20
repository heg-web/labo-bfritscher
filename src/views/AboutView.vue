<template>
    <div class="about">
        <h1>This is an about page</h1>
        {{ $route.params.id }}
        <div>
            <button @click="loadData" :disabled="isLoading">load images</button>
            <div class="row">
            <div v-for="img in images" v-bind:key="img.id" class="col">
              <img :src="img.url" />
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name: "AboutView",
    data() {
        return {
            isLoading: false,
            images: []
        };
    },
    methods: {
        loadData() {
            this.isLoading = true;
            axios
                .get("https://api.thecatapi.com/v1/images/search?limit=10", {
                    headers: {
                        "x-api-key": "DEMO-API-KEY"
                    }
                })
                .then((response) => {
                    this.images = this.images.concat(response.data);
                    this.isLoading = false;
                })
                .catch((error) => {
                    console.error(error);
                    this.isLoading = false;
                });
        }
    }
};
</script>
<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
}
img {
  max-width: 100px;
}
</style>
