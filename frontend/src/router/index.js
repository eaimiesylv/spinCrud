import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/UserDashboard.vue'
import IndexPage from '../views/IndexPage.vue'


const Roles = {
  admin:3,
  classteacher:2,
  staff:1,
  student:0,
};

function hasRole(userRole, requiredRole) {
 
  return userRole === requiredRole;
}


const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexPage
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component:Dashboard,
    meta: {
      role:Roles.student, // Specify the required role for the route
    },
  },
  {
    path: '/project',
    name: 'project',
    component: function () {
     return import( '../views/ProjectBoard.vue')
    }
  },
  {
    path: '/forbidden',
    name: 'forbidden',
    component: function () {
     return import( '../views/NotLogin.vue')
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
    component: function () {
      return import( '../views/404Page.vue')
     }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


// Navigation guard
router.beforeEach((to, from, next) => {
  const requiredRole = to.meta.role; // Get the required role from the route's meta data
  //alert(localStorage.getItem('token'));
  const role =localStorage.getItem('role');
  const userRole = Number(atob(role));
  
  //const userRole = getUserRole(); // Get the user's role from wherever you store it (e.g., Vuex store, local storage)

  if (requiredRole && !hasRole(userRole, requiredRole)) {
  
    // User doesn't have the required role, redirect to a different page or show an error message
    next({ path: '/forbidden'}); 
  } else {
    
    // User has the required role, proceed to the next route
    next();
  }
});
export default router