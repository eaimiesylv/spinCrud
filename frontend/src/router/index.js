import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/UserDashboard.vue'
import IndexPage from '../views/IndexPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexPage
  },
  {
    path: '/projects',
    name: 'projects',
    component: function () {
      return import( '../views/UserDashboard.vue')
    }
  },
  
  {
    path: '/logout',
    name: 'logout',
    component: function () {
     return import( '../views/UserDashboard.vue')
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