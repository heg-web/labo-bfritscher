<template>
    <div class="container">
        <h1>Donations!</h1>
        <div class="row">
            <div class="col-sm">
                <app-add v-on:add-amount="addAmount" />
                <div>
                    <label><input type="radio" name="sortOrder" v-model="sortOrder" value="r" /> Recent</label>
                    <label><input type="radio" name="sortOrder" v-model="sortOrder" value="t" />Top</label>
                </div>
                <transition-group name="flip-list" tag="ul">
                    <app-donation
                        v-for="donation in sortedDonations"
                        v-bind:key="donation.id"
                        v-bind:donation="donation"
                        v-on:remove-donation="removeDonation(donation)"
                    />
                </transition-group>
                <p>Total: {{ toCHF(total) }}</p>
                <app-add v-on:add-amount="addAmount" />
            </div>
            <div class="col-sm">
                <i class="fas fa-ice-cream display-1 text-primary"></i>
                <i class="fa-brands fa-github display-1"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { toCHF } from "./utils/filters";
import AppDonation from "./components/AppDonation.vue";
import AppAdd from "./components/AppAdd.vue";
import { nanoid } from "nanoid";

const LOCAL_STORAGE_KEY = "donations";

function numberToDonation(num) {
    return {
        id: nanoid(),
        amount: num
    };
}

export default {
    components: {
        AppDonation,
        AppAdd
    },
    data() {
        const donations = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");
        return {
            sortOrder: "r",
            donations
        };
    },
    computed: {
        topDonations() {
            return this.donations.slice(0).sort((a, b) => {
                return b.amount - a.amount;
            });
        },
        total() {
            let total = 0;
            for (let donation of this.donations) {
                total += donation.amount;
            }
            return total;
            // return this.donations.reduce((acc, donation) => acc + donation.value, 0);
        },
        sortedDonations() {
            if (this.sortOrder === "r") {
                return this.donations;
            }
            if (this.sortOrder === "t") {
                return this.topDonations;
            }
            return [];
        }
    },
    watch: {
        donations: {
            handler() {
                this.save();
            },
            deep: true
        }
    },
    methods: {
        toCHF,
        addAmount(amount) {
            this.donations.push(numberToDonation(amount));
            // this.save();
        },
        removeDonation(donation) {
            const index = this.donations.indexOf(donation);
            this.donations.splice(index, 1);
            // this.donations = this.donations.filter((donation, i) => i !== index);
            //this.save();
        },
        save() {
            // localStorage et JSON...
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.donations));
        }
    }
};
</script>

<style>
ul {
    list-style-type: none;
}
img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
}
.flip-list-move,
.flip-list-enter-active,
.flip-list-leave-active {
    transition: transform 1s;
    transition-timing-function: cubic-bezier(0.45,-1.12, 0, 1.54);
}
.flip-list-enter-from,
.flip-list-leave-to {
    transform: scale(0.2);
}
</style>
