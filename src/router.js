import { createWebHistory, createRouter } from 'vue-router';
import home from './components/home.vue';
// import Dashboard from './views/Dashboard.vue';
import myAbout from './components/myAbout.vue';
import myContact from './components/myContact.vue';

const routes = [{
        name: 'homePage',
        path: '/',
        component: home
    },
    {
        name: 'myAbout',
        path: '/myAbout',
        component: myAbout
    },
    {
        name: 'myContact',
        path: '/myContact',
        component: myContact
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;