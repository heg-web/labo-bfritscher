<template>
  <div>
    <img class="chevron" v-bind:src="montantToImg(donation.value)" alt="" />
    {{ toChf(donation.value) }}
    <button v-on:click="supprimerDonation()">X</button>
  </div>
</template>

<script>
import { toChf } from "../toChf.js";
export default {
  name: "app-donation",
  props: ["donation"],
  methods: {
    supprimerDonation() {
      this.$emit("supprimer");
    },
    montantToImg(montant) {
      let level = 1;
      if (montant > 10) {
        level = 2;
      }
      if (montant > 20) {
        level = 3;
      }
      return `https://gistcdn.githack.com/bfritscher/6ff8e74b80d44616944843fe83cc5d19/raw/2d4e25748fbbe681681932444a7ef339c90d4dde/chevron_${level}.svg`;
    },
    toChf,
  },
};
</script>
