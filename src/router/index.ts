import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home/index.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router