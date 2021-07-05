<template>
  <div id="app">
    <h1>Donations</h1>
    <app-add v-on:ajouter="creerDonation($event)"></app-add>
    <p>
      <label
        ><input type="radio" name="orderBy" value="recent" v-model="orderBy" />
        Récent</label
      >
      <label
        ><input type="radio" name="orderBy" value="top" v-model="orderBy" />
        Top</label
      >
    </p>
    <div>
      <app-donation
        v-for="(donation, index) in orderedDonations"
        v-bind:donation="donation"
        v-on:supprimer="supprimerDonation(donation)"
        v-bind:key="index"
      ></app-donation>
    </div>
    <p>Total: {{ toChf(total) }}</p>
    <app-add v-on:ajouter="creerDonation($event)"></app-add>
    <search-cat></search-cat>
  </div>
</template>

<script>
import AppAdd from "./components/AppAdd.vue";
import AppDonation from "./components/AppDonation.vue";
import SearchCat from './components/SearchCat.vue';
import { toChf } from "./toChf.js";

export default {
  name: "App",
  components: {
    AppAdd,
    AppDonation,
    SearchCat,
  },
  data() {
    // charger la liste depuis le localStorage si elle existe
    return {
      donations: [
        {
          value: 45.6,
        },
        {
          value: 32,
        },
        {
          value: 34,
        },
      ],
      orderBy: "recent",
    };
  },
  computed: {
    total() {
      let total = 0;
      for (let el of this.donations) {
        total = total + el.value; // total += el
      }
      return total;
    },
    orderedDonations() {
      if (this.orderBy === "top") {
        const orderedDonations = this.donations.slice(0);
        orderedDonations.sort((a, b) => {
          return b.value - a.value;
        });
        return orderedDonations;
      }
      return this.donations;
    },
  },
  methods: {
    creerDonation(montant) {
      this.donations.push({
        value: montant,
      });
      this.saveDonations();
    },
    supprimerDonation(donation) {
      const index = this.donations.indexOf(donation);
      this.donations.splice(index, 1);
      this.saveDonations();
    },
    saveDonations() {
      // TODO: serialiser et stocker la liste dans le localStorage
    },
    toChf,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.error {
  color: red;
}

.chevron {
  width: 30px;
}
</style>
