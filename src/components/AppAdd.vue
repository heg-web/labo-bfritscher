<template>
    <div>
        <input type="number" v-model="amount" placeholder="100" v-on:keydown.enter="addAmount" />
        <button v-on:click="addAmount" v-bind:disabled="!canAdd()">Ajouter</button>
        <p v-if="!canAdd() && amount != ''" class="error">Nombre positif requis!</p>
    </div>
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
        },
        canAdd() {
            return this.amount > 0;
        }
    }
};
</script>
<style>
.error {
    color: red;
}
</style>
