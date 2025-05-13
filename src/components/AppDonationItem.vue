<template>
    <li>
        <img v-bind:src="urlImage" class="flag" />
        {{ toChf(donation.value) }}
        <button class="btn btn-danger btn-sm" v-on:click="removeDonation">x</button>
    </li>
</template>
<script>
import { toChf } from "../utils";
export default {
    props: ["donation"],
    emits: ["remove"],
    data() {
        return {};
    },
    methods: {
        toChf(value) {
            return toChf(value);
        },
        removeDonation() {
            this.$emit("remove", this.donation);
        }
    },
    computed: {
        urlImage() {
            let level = 1;
            const value = this.donation.value;
            if (value > 20) {
                level = 3;
            } else if (value > 10) {
                level = 2;
            }
            return `https://gistcdn.githack.com/bfritscher/6ff8e74b80d44616944843fe83cc5d19/raw/2d4e25748fbbe681681932444a7ef339c90d4dde/chevron_${level}.svg`;
        }
    }
};
</script>
