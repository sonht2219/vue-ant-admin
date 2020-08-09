import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { LayoutCommon } from '../shared/layout';
import { authRoutes } from "@/modules/auth";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        component: LayoutCommon,
        children: [
            {
                path: '',
                component: () => import(/* webpackChunkName: "icons" */ '../views/Home.vue'),
                name: 'About',
                meta: {
                    title: 'icons',
                    icon: 'icon',
                    noCache: true
                }
            }
        ]
    },
    ...authRoutes
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
