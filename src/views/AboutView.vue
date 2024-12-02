<template>
    <div class="about">
        <h1>This is an about page</h1>
        <h2>{{ $route.params.id }}</h2>
        <p>We have {{ $root.donations.length }} donations!</p>
    </div>
</template>
<script>
export default {
    name: "AboutView",
    mounted() {
        console.log("AboutView mounted", this.$route.params.id);
    }
};
</script>
<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
