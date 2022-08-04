import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Templates from '@/components/Templates.vue'
import Customers from '@/components/Customers.vue'
import Learn from '@/components/Learn.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/templates',
    name: 'templates',
    component: Templates
  },
  {
    path: '/customers',
    name: 'customers',
    component: Customers
  },
  {
    path: '/learn',
    name: 'learn',
    component: Learn
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
