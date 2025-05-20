import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import Game from "../views/Game.vue";
import Login from "../views/Login.vue";
import Chat from "../views/Chat.vue";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/about/:id",
            name: "about",
            component: AboutView
        },
        {
            path: "/game",
            name: "game",
            component: Game
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/chat",
            name: "chat",
            component: Chat
        }
    ]
});

export default router;
