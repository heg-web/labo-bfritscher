<template>
    <h1>Page Home</h1>

    <app-add @add-amount="addAmount"></app-add>

    <p>
        <label><input type="radio" name="sortOrder" value="recent" v-model="sortOrder" />Recent</label>
        <label><input type="radio" name="sortOrder" value="top" v-model="sortOrder" />Top </label>
    </p>
    <ul>
        <app-donation-item
            v-for="(d, index) in donationsSorted"
            v-bind:key="index"
            v-bind:donation="d"
            @remove="removeDonation"
        ></app-donation-item>
    </ul>
    <p>Total: {{ toChf(total) }}</p>

    <app-add @add-amount="addAmount($eve)"></app-add>
</template>

<script>
import { toChf } from "../utils";
import AppAdd from "../components/AppAdd.vue";
import AppDonationItem from "../components/AppDonationItem.vue";

export default {
    components: {
        "app-add": AppAdd,
        "app-donation-item": AppDonationItem
    },
    data() {
        const savedDonations = localStorage.getItem("donations");
        let donations = [];
        if (savedDonations) {
            donations = JSON.parse(savedDonations);
        }

        return {
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
        addAmount(amount) {
            this.donations.push({
                value: amount
            });
            this.saveDonations();
        },
        removeDonation(d) {
            const index = this.donations.indexOf(d);
            this.donations.splice(index, 1);
            this.saveDonations();
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
