// import vue router
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// define routes with proper type
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "register" */ '../views/auth/register.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '../views/auth/login.vue')
    },
]

// create router
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router

