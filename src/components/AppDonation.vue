<template>
    <li>
        <img :src="amountToUrl(donation.amount)" />
        {{ toCHF(donation.amount) }} <button v-on:click="removeDonation()">X</button>
    </li>
</template>
<script>
import { toCHF } from "../filters";
export default {
    props: ["donation"],
    emits: ["removed"],
    methods: {
        removeDonation() {
            this.$emit("removed");
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
        toCHF
    }
};
</script>
