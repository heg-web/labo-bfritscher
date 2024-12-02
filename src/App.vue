<template>
    <div class="container">
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/donations">Donations</router-link>
            <router-link :to="{ name: 'about', params: { id: 1 } }">About</router-link>
        </nav>
        <router-view />
    </div>
</template>

<script>
import { LOCAL_STORAGE_KEY } from "@/utils/constants";

export default {
    data() {
        const donations = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");

        return {
            donations
        };
    }
};
</script>

<style></style>
