import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";

Vue.config.productionTip = false;

new Vue({
  data() {
    // charger un etat global du storage

    return {
      stateGlobal: {
        maListe: [],
        uneValeur: 34
      },
    };
  },
  methods: {
    inc() {
      this.stateGlobal.uneValeur += 1;
    },
    save() {
      // save localStorage
    }
  },
  router: router,
  render: (h) => h(App),
}).$mount("#app");
