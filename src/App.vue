<template>
    <div class="container">
        <h1>Hello Bootstrap</h1>
        <donation-add v-on:add="addDonation" />

        <p>
            <label><input type="radio" name="sort" value="recent" v-model="sortType" /> Recent</label>
            <label><input type="radio" name="sort" value="top" v-model="sortType" /> Top</label>
        </p>
        <ul>
            <donation-item :donation="d" v-for="d in donationSorted" v-bind:key="d.id" v-on:remove="remove(d)" />
        </ul>
        <p>{{ total }}</p>

        <donation-add v-on:add="addDonation($event)" />
    </div>
</template>

<script>
import { createDonation } from "./utils";
import DonationItem from "./components/DonationItem.vue";
import DonationAdd from "./components/DonationAdd.vue";
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
    components: {
        DonationItem,
        DonationAdd
    },
    data() {
        return {
            sortType: "recent",
            donations: [createDonation(12, "This is a comment"), createDonation(15)]
        };
    },
    computed: {
        total() {
            // return this.donations.reduce((acc, d) => acc + d.amount, 0);
            let total = 0;
            for (let d of this.donations) {
                total += d.amount;
            }
            return total;
        },
        donationSorted() {
            if (this.sortType === "recent") {
                return this.donations;
            }
            return this.donations.toSorted((a, b) => b.amount - a.amount);
        }
    },
    methods: {
        addDonation(amount) {
            this.donations.unshift(createDonation(amount));
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
