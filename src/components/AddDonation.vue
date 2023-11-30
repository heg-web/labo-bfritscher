<template>
    <div>
        <input type="number" placeholder="Montant?" v-model.number="amount" />
        <button v-on:click="addDonation" v-bind:disabled="amount <= 0">Ajouter</button>
        <transition name="fade">
            <p v-if="amount !== '' && amount <= 0">Montant supérieur à 0</p>
        </transition>
    </div>
</template>
<script>
export default {
    emits: ["added"],
    data() {
        return {
            amount: ""
        };
    },
    methods: {
        addDonation() {
            this.$emit("added", this.amount);
            this.amount = "";
        }
    }
};
</script>
