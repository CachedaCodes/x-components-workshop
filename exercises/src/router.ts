import Vue from 'vue';
// @ts-ignore
import VueRouter, {RouteConfig} from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'Main View',
        component: () => import('./main-view.vue')
    },
    {
        path: '/e-1',
        name: 'Exercise 1',
        component: () => import('./exercises/1-exercise.vue')
    },
    {
        path: '/s-1',
        name: 'Exercise 1 Solution',
        component: () => import('./exercises/1-solution.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
