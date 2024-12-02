import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import DonationsView from "../views/DonationsView.vue";
import CatView from "../views/CatView.vue";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/apropos/:id",
            name: "about",
            component: AboutView
        },
        {
            path: "/donations",
            name: "donations",
            component: DonationsView
        },
        {
            path: "/cat",
            name: "cat",
            component: CatView
        }
    ]
});

export default router;
