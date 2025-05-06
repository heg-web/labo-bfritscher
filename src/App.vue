<template>
    <div class="container">
        <h1>Donations</h1>
        <input v-model.number="amount" type="number" />
        <button v-on:click="addAmount()" v-bind:disabled="amount <= 0">add</button>
        <p v-if="amount != '' && amount <= 0" class="bg-danger text-white mt-3 p-2">Attention...</p>
        <p>
            <label><input type="radio" name="sortOrder" value="recent" v-model="sortOrder" />Recent</label>
            <label><input type="radio" name="sortOrder" value="top" v-model="sortOrder" />Top </label>
        </p>
        <ul>
            <li v-for="(d, index) in donationsSorted" v-bind:key="index">
                <img v-bind:src="urlImage(d.value)" class="flag" />
                {{ toChf(d.value) }} <button class="btn btn-danger btn-sm" v-on:click="removeDonation(d)">x</button>
            </li>
        </ul>
        <p>Total: {{ toChf(total) }}</p>
    </div>
</template>

<script>
import { toChf } from "./utils";

export default {
    data() {
        const savedDonations = localStorage.getItem("donations");
        let donations = [];
        if (savedDonations) {
            donations = JSON.parse(savedDonations);
        }

        return {
            amount: "",
            sortOrder: "recent",
            donations: donations
        };
    },
    methods: {
        saveDonations() {
            localStorage.setItem("donations", JSON.stringify(this.donations));
        },
        toChf(value) {
            return toChf(value);
        },
        addAmount() {
            this.donations.push({
                value: this.amount
            });
            this.saveDonations();
            this.amount = "";
        },
        removeDonation(d) {
            const index = this.donations.indexOf(d);
            this.donations.splice(index, 1);
            this.saveDonations();
        },
        urlImage(value) {
            let level = 1;
            if (value > 20) {
                level = 3;
            } else if (value > 10) {
                level = 2;
            }
            return `https://gistcdn.githack.com/bfritscher/6ff8e74b80d44616944843fe83cc5d19/raw/2d4e25748fbbe681681932444a7ef339c90d4dde/chevron_${level}.svg`;
        }
    },
    computed: {
        donationsSorted() {
            if (this.sortOrder === "top") {
                return this.donations.toSorted((a, b) => b.value - a.value);
            }
            if (this.sortOrder === "recent") {
                return this.donations.slice().reverse();
            }
            return this.donations;
        },
        total() {
            return this.donations.reduce((total, d) => total + d.value, 0);
            /*
            let total = 0;
            for (let i; i< this.donations.length; i++) {
              let d = this.donations[i];
              total = total + d.value;
            }
            return total;
            */
        }
    }
};
</script>

<style>
.flag {
    width: 30px;
}
</style>
