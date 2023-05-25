import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";

const routes = [
{
path: "/",
name: "hello",
component: HelloWorld,  
},
{
path: "/write",
name: "write",
component: () => import("../components/WritePage.vue"),
},
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;