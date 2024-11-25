<template>
    <li>
        <img v-bind:src="donationToImg" />
        {{ toCHF(donation.amount) }}
        <button v-on:click="removeDonation()">x</button>
    </li>
</template>
<script>
import { toCHF } from "../utils/filters";
export default {
    props: ["donation"],
    emits: ["remove-donation"],
    computed: {
        donationToImg() {
            let level = 3;
            if (this.donation.amount < 10) {
                level = 1;
            } else if (this.donation.amount < 20) {
                level = 2;
            }
            return `https://gistcdn.githack.com/bfritscher/6ff8e74b80d44616944843fe83cc5d19/raw/2d4e25748fbbe681681932444a7ef339c90d4dde/chevron_${level}.svg`;
        }
    },
    methods: {
        toCHF,
        removeDonation() {
            this.$emit("remove-donation");
        }
    }
};
</script>
<style></style>
