import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ChatView from "../views/ChatView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/chat/:name",
            name: "chat",
            component: ChatView
        },
        {
            path: "/about",
            name: "about",
            component: AboutView
        }
    ]
});

export default router;
