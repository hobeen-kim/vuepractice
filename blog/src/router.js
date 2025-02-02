import {createWebHistory, createRouter, createWebHashHistory} from "vue-router";
import List from "@/components/List.vue";
import Home from "@/components/Home.vue";
import Detail from "@/components/Detail.vue";
import Author from "@/components/Author.vue";
import Comment from "@/components/Comment.vue";

const routes = [
    {
        path: "/list",
        component: List,
    },
    {
        path: "/",
        component: Home,
    },
    {
        path: "/detail/:id(\\d+)",
        component: Detail,
        children: [
            {
                path: "author",
                component: Author,
            },
            {
                path: "comment",
                component: Comment,
            },
        ]
    },
    {
        path: "/:any(.*)", //404로 할수도 있음, list 보다 밑에 있어야 함.
        component: Home,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;