<template>
    <div class="container">
        <nav>
            <router-link v-bind:to="{ name: 'home' }">Home</router-link>
            <router-link v-bind:to="{ name: 'about', params: { id: '123' } }">About</router-link>
        </nav>
        <router-view />
    </div>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>
