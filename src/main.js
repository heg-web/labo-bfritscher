import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/sketchy/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

let myvar = "Hello World";

console.log(myvar);

app.use(router);

app.mount("#app");