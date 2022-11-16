import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import HomePage from '../views/HomePage.vue'
import PondsPage from '../views/PondsPage.vue'
import RegisPage from '../views/RegisPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/PondsPage',
    name: 'PageSecond',
    component: PondsPage
  },
  {
    path: '/RegisPage',
    name: 'Regis',
    component: RegisPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes

  const app = createApp(App).use(store)
  app.use(VueAxios, axios)
  app.provide('axios', app.config.globalProperties.axios)  // provide 'axios'
  app.mount('#app')
  
})

export default router
