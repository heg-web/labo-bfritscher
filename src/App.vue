<template>
    <div class="container">
        <h1>Donations</h1>
        <div class="row">
            <div class="col">
                <add-donation v-on:added="addDonation" />

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="recent" value="recent" v-model="filter" />
                    <label class="form-check-label" for="recent">Recent</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="top" value="top" v-model="filter" />
                    <label class="form-check-label" for="top">Top</label>
                </div>

                <transition-group name="flip-list" tag="ul">
                    <app-donation
                        v-for="d in filteredDonations"
                        v-bind:key="d.id"
                        v-bind:donation="d"
                        v-on:removed="removeDonation(d)"
                    ></app-donation>
                </transition-group>
                <p>{{ toCHF(total) }}</p>

                <add-donation v-on:added="addDonation" />
            </div>
        </div>
    </div>
</template>

<script>
import { nanoid } from "nanoid";
import { toCHF } from "./filters";
import AddDonation from "./components/AddDonation.vue";
import AppDonation from "./components/AppDonation.vue";

export default {
    components: {
        "add-donation": AddDonation,
        "app-donation": AppDonation
    },
    data() {
        return {
            donations: [],
            filter: "recent"
        };
    },
    computed: {
        total() {
            return this.donations.reduce((total, donation) => total + donation.amount, 0);
        },
        sortedByRecent() {
            return this.donations;
        },
        sortedByTop() {
            return [...this.donations].sort((a, b) => b.amount - a.amount);
        },
        filteredDonations() {
            return this.filter === "recent" ? this.sortedByRecent : this.sortedByTop;
        }
    },
    methods: {
        addDonation(amount) {
            this.donations.push({
                id: nanoid(),
                amount: amount
            });
        },
        removeDonation(donation) {
            const index = this.donations.findIndex((d) => d.id === donation.id);
            this.donations.splice(index, 1);
        },
        toCHF
    }
};
</script>

<style>
img {
    width: 20px;
}
li {
    list-style-type: none;
}
</style>
