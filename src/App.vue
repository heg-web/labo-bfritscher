<template>
    <div class="container">
        <h1>Donations</h1>
        <div class="row">
            <div class="col">
                <input type="number" placeholder="Montant?" v-model.number="amount" />
                <button v-on:click="addDonation" v-bind:disabled="amount <= 0">Ajouter</button>
                <p v-if="amount !== '' && amount <= 0">Montant supérieur à 0</p>

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="recent" value="recent" v-model="filter" />
                    <label class="form-check-label" for="recent">Recent</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="top" value="top" v-model="filter" />
                    <label class="form-check-label" for="top">Top</label>
                </div>

                <ul>
                    <li v-for="(donation, index) in filteredDonations" v-bind:key="index">
                        <img :src="amountToUrl(donation)" />
                        {{ toCHF(donation) }} <button v-on:click="removeDonation(index)">X</button>
                    </li>
                </ul>
                <p>{{ toCHF(total) }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            amount: "",
            donations: [],
            filter: "recent"
        };
    },
    computed: {
        total() {
            return this.donations.reduce((total, donation) => total + donation, 0);
        },
        sortedByRecent() {
            return this.donations;
        },
        sortedByTop() {
            return [...this.donations].sort((a, b) => b - a);
        },
        filteredDonations() {
            return this.filter === "recent" ? this.sortedByRecent : this.sortedByTop;
        }
    },
    methods: {
        addDonation() {
            this.donations.push(this.amount);
            this.amount = "";
        },
        removeDonation(index) {
            this.donations.splice(index, 1);
        },
        amountToUrl(amount) {
            let level = 3;
            if (amount <= 10) {
                level = 1;
            } else if (amount <= 20) {
                level = 2;
            }

            return `https://gistcdn.githack.com/bfritscher/6ff8e74b80d44616944843fe83cc5d19/raw/2d4e25748fbbe681681932444a7ef339c90d4dde/chevron_${level}.svg`;
        },
        toCHF(amount) {
            return `${amount.toFixed(2)} CHF`;
        }
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
