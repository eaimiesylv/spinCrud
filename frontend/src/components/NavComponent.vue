<template>
    <nav>
      <img src="@/assets/logo.jpg" alt="Task Scheduler" class="img"/>
      
      <hr style="color:red">
     
      <router-link to="/dashboard">
        <i class="fas fa-home"></i> Dashboard
      </router-link>

      <router-link to="/logout"  @click="logout">
        <i class="fas fa-sign-out-alt"></i> Log Out
      </router-link>

    </nav>
  </template>
  
  <script>
  import useAuthStore from '../store';
  export default {
    name: 'NavComponent',
    methods: {
    logout() {
      useAuthStore().logout();
    },
  },
  }
  </script>
  
  <style scoped>
  
  </style>
  