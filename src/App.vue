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
                {{ d.value }} <button class="btn btn-danger btn-sm" v-on:click="removeDonation(d)">x</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            amount: "",
            sortOrder: "recent",
            donations: [
                {
                    value: 1234
                },
                {
                    value: 34
                },
                {
                    value: 234
                },
                {
                    value: 234
                }
            ]
        };
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
        }
    },
    methods: {
        addAmount() {
            this.donations.push({
                value: this.amount
            });
            this.amount = "";
        },
        removeDonation(d) {
            const index = this.donations.indexOf(d);
            this.donations.splice(index, 1);
        }
    }
};
</script>

<style></style>
