<template>
    <div class="container">
        <h1>Hello Bootstrap</h1>
        <input v-model.number="amount" placeholder="12.00" type="number" />
        <button v-on:click="addDonation()" v-bind:disabled="amount <= 0">add</button>
        <p v-if="amount <= 0 && amount !== ''">amount must be > 0</p>
        <ul v-for="donation in donations" v-bind:key="donation.id">
            <li>{{ donation.amount }} <button v-on:click="remove(donation)">X</button></li>
        </ul>
    </div>
</template>

<script>
import { createDonation } from "./utils";
/* methods sur Array
function find(func) {
    for (let d of this) {
        if (func(d)) {
            return d;
        }
    }
}
*/
export default {
    data() {
        return {
            amount: "",
            donations: [createDonation(12, "This is a comment"), createDonation(15)]
        };
    },
    methods: {
        addDonation() {
            this.donations.push(createDonation(this.amount));
            this.amount = "";
        },
        remove(donation) {
            // const donationInDonations = this.donations.find((d) => d.id === donation.id);
            const index = this.donations.indexOf(donation);
            //if (index !== -1) {
            this.donations.splice(index, 1);
            //}
        }
    }
};
</script>

<style></style>
