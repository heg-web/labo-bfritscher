<template>
    <div class="container">
        <h1>Donations!</h1>
        <div class="row">
            <div class="col-sm">
                <input type="number" v-model="amount" placeholder="100" v-on:keydown.enter="addAmount" />
                <button v-on:click="addAmount" v-bind:disabled="!canAdd()">Ajouter</button>
                <p v-if="!canAdd() && amount != ''" class="error">Nombre positif requis!</p>

                <div>
                    <label><input type="radio" name="sortOrder" v-model="sortOrder" value="r" /> Recent</label>
                    <label><input type="radio" name="sortOrder" v-model="sortOrder" value="t" />Top</label>
                </div>
                <ul>
                    <li v-for="(donation, index) in sortedDonations" v-bind:key="index">
                        <img v-bind:src="donationToImg(donation)" >
                        {{ toCHF(donation.amount) }}
                        <button v-on:click="removeDonation(donation)">x</button>
                    </li>
                </ul>
                <p>Total: {{ toCHF(total) }}</p>
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

function numberToDonation(num) {
    return { amount: num };
}

export default {
    data() {
        return {
            sortOrder: "r",
            amount: "",
            donations: [numberToDonation(23), numberToDonation(53), numberToDonation(43)]
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
    methods: {
        donationToImg(donation) {
            let level = 3;
            if (donation.amount < 10) {
                level = 1;
            } else if (donation.amount < 20) {
                level = 2;
            }
            return `https://gistcdn.githack.com/bfritscher/6ff8e74b80d44616944843fe83cc5d19/raw/2d4e25748fbbe681681932444a7ef339c90d4dde/chevron_${level}.svg`;
        },
        toCHF,
        addAmount() {
            this.donations.push(numberToDonation(this.amount));
            this.amount = "";
        },
        canAdd() {
            return this.amount > 0;
        },
        removeDonation(donation) {
            const index = this.donations.indexOf(donation);
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
ul {
    list-style-type: none;
}
img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
}
</style>
