<template>
  <div>
    <input v-model="montant" v-on:keyup.enter="ajouterMontant()" /><button
      v-on:click="ajouterMontant()"
      v-bind:disabled="montant <= 0"
    >
      ajouter
    </button>
    <p v-if="montant < 0" class="error">Merci d'indiquer un chiffre > 0</p>
    <p v-if="errorMsg" class="error">{{ errorMsg }}</p>

  </div>
</template>

<script>
export default {
  name: "app-add",
  data() {
    return {
      montant: "",
      errorMsg: "",
    };
  },
  methods: {
    ajouterMontant() {
      const montant = parseInt(this.montant);
      if (montant > 0) {
        this.$emit("ajouter", montant);
        this.montant = "";
        this.errorMsg = "";
      } else {
        this.errorMsg = "montant pas valide....";
      }
    },
  }
};

/*
const maVAr = 123213;
if (asdsad) {
  //...;
  maVAr++;
}
function maFunc() {
  // ...;
}

const maFuncArrow = () => {

};

const monObj = {
  attribut: "asdad",
  attribute: "asdasd",
  data() {
    /// asdadasdsad;
  },
  monattribut3: "asdasd",
  adbhajhdasd: "asdasd",
};
*/
</script>
