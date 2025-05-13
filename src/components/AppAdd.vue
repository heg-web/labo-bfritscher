<template>
    <input v-model.number="amount" type="number" />
    <button v-on:click="addAmount()" v-bind:disabled="amount <= 0">add</button>
    <p v-if="amount != '' && amount <= 0" class="bg-danger text-white mt-3 p-2">Attention...</p>
</template>

<script>
export default {
    emits: ["add-amount"],
    data() {
        return {
            amount: ""
        };
    },
    methods: {
        addAmount() {
            this.$emit("add-amount", this.amount);
            this.amount = "";
        }
    }
};
</script>
