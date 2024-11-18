<template>
    <div class="container">
        <h1>Donations!</h1>
        <div class="row">
            <div class="col-sm">
                <input type="number" v-model="amount" placeholder="100" v-on:keydown.enter="addAmount" />
                <button v-on:click="addAmount" v-bind:disabled="!canAdd()">Ajouter</button>
                <p v-if="!canAdd() && amount != ''" class="error">Nombre positif requis!</p>
                <ul>
                    <li v-for="(donation, index) in donations" v-bind:key="index">
                        {{ donation }}
                        <button v-on:click="removeDonation(index)">x</button>
                    </li>
                </ul>
            </div>
            <div class="col-sm">
                <i class="fas fa-ice-cream display-1 text-primary"></i>
                <i class="fa-brands fa-github display-1"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            amount: "",
            donations: [23, 53, 43]
        };
    },
    methods: {
        addAmount() {
            this.donations.push(this.amount);
            this.amount = "";
        },
        canAdd() {
            return this.amount > 0;
        },
        removeDonation(index) {
            this.donations.splice(index, 1);
            // this.donations = this.donations.filter((donation, i) => i !== index);
        }
    }
};
</script>

<style>
.error {
    color: red;
}
</style>
