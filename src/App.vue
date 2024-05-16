<template>
    <div class="container">
        MENU
        <p>
            <router-link to="/">Home</router-link>
            <router-link to="/chat">Chat</router-link>
            <router-link to="/about">About</router-link>
        </p>
        <router-view />
    </div>
</template>

<script>
export default {
    name: "App"
};
</script>

<style></style>
