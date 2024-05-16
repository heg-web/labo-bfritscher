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

const LOCAL_STORAGE_KEY = "myapp-donations";

export default {
    components: {
        DonationItem,
        DonationAdd
    },
    data() {
        let donations = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (donations) {
            try {
                donations = JSON.parse(donations);
            } catch (e) {
                donations = [];
            }
        }

        return {
            sortType: "recent",
            donations: donations || []
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
        },
        save() {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.donations));
        }
    },
    watch: {
        donations: {
            handler() {
                this.save();
            },
            deep: true
        }
    }
};
</script>

<style></style>
