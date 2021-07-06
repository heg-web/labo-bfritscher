import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  data() {
    return {
      stateGlobal: 45,
    };
  },
  methods: {
    inc() {
      this.stateGlobal += 1;
    }
  },
  router,
  render: (h) => h(App),
}).$mount("#app");
