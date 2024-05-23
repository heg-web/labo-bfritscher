<template>
    <div class="container">
        MENU
        <input v-model="chat" />
        <p>
            <router-link to="/">Home</router-link>
            <router-link v-bind:to="`/chat/${chat}`">Chat</router-link>
            <router-link to="/about">About</router-link>
        </p>
        <router-view />
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            chat: ""
        };
    }
};
</script>

<style></style>
