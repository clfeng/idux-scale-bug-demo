import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Idux from "./idux";
import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
    { path: '/origin', component: () => import('./origin-page/index.vue') },
    { path: '/scale', component: () => import('./scale-page/index.vue') },
    { path: '/', redirect: '/origin' },
]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })
createApp(App).use(Idux).use(router).mount("#app");
