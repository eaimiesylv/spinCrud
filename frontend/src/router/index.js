import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/AdminDashboard.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/projects',
    name: 'projects',
    component: function () {
      return import( '../views/AdminDashboard.vue')
    }
  },
  {
    path: '/scheduler',
    name: 'scheduler',
    component: function () {
     return import( '../views/AdminDashboard.vue')
    }
  },
  {
    path: '/content-wizard',
    name: 'content-wizard',
    component: function () {
     return import( '../views/AdminDashboard.vue')
    }
  },
  {
    path: '/document',
    name: 'document',
    component: function () {
     return import( '../views/AdminDashboard.vue')
    }
  },
  {
    path: '/logout',
    name: 'logout',
    component: function () {
     return import( '../views/AdminDashboard.vue')
    }
  },
  {
    // Catch-all route for any other paths
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: DashboardView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router