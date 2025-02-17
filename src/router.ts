import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import NotFound from './views/NotFound.vue';

const routes = [
    {
        path: '/',
        name: 'Backstage',
        component: Home
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Página não encontrada',
        component: NotFound
    }
];

const router = createRouter({history: createWebHistory(), routes});

export default router