import {RouteConfig} from "vue-router";
import {LayoutAuth} from "@/shared/layout";

const authRoutes: Array<RouteConfig> = [
    {
        path: "/auth",
        component: LayoutAuth,
        children: [
            {
                path: "login",
                name: "login",
                component: () => import("./Login/index.vue"),
                meta: { title: "Đăng nhập" }
            },
            {
                path: "register",
                name: "register",
                component: () => import("./Register/index.vue"),
                meta: { title: "Đăng ký" }
            }
        ]
    }
];
export default authRoutes;