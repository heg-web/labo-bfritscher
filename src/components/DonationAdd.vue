<template>
    <input v-model.number="amount" placeholder="12.00" type="number" />
    <button v-on:click="addDonation()" v-bind:disabled="amount <= 0">add</button>
    <p v-if="amount <= 0 && amount !== ''">amount must be > 0</p>
</template>
<script>
export default {
    name: "DonationAdd",
    emits: ["add"],
    data() {
        return {
            amount: ""
        };
    },
    methods: {
        addDonation() {
            this.$emit("add", this.amount);
            this.amount = "";
        }
    }
};
</script>
