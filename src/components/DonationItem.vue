<template>
    <li>
        <img v-bind:src="img" />
        {{ donation.amount }} <button v-on:click="remove()">X</button></li>
</template>
<script>
export default {
    props: ["donation"],
    emits: ["remove"],
    computed: {
        img() {
            let level = "1";
            if (this.donation.amount > 10) {
                level = "2";
            }
            if (this.donation.amount > 20) {
                level = "3";
            }
            return `https://gistcdn.githack.com/bfritscher/6ff8e74b80d44616944843fe83cc5d19/raw/2d4e25748fbbe681681932444a7ef339c90d4dde/chevron_${level}.svg`;
        }
    },
    methods: {
        remove() {
            this.$emit("remove");
        }
    }
};
</script>
<style scoped>
li {
    list-style-type: none;
    padding: 10px;
    border: 1px solid #ccc;
    margin: 5px;
}
button {
    background-color: red;
    color: white;
    border: none;
    padding: 5px;
    margin-left: 10px;
}

img {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-right: 5px;
}
</style>
