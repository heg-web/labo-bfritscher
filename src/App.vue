<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link :to="{ name: 'donations' }">Donation</router-link>
    </nav>
    <router-view></router-view>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style></style>
