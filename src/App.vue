<template>
  <div id="app">
    <h1>Donations</h1>
    <input v-model="montant" /><button v-on:click="ajouterMontant()">
      ajouter
    </button>
    <p v-if="montant < 0">Merci d'indiquer un chiffre > 0 </p>
    <ul>
      <li v-for="(donation, index) in donations" v-bind:key="index">
        {{ donation }} <!-- button qui supprime -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      montant: "",
      donations: [45.6, 32, 34],
    };
  },
  methods: {
    ajouterMontant() {
      const montant = parseInt(this.montant);
      this.donations.push(montant);
      this.montant = "";
    },
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
</style>
