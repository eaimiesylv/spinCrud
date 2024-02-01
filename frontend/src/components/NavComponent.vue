

<template>
    <nav>
      <img src="@/assets/logo.jpg" alt="Task Scheduler" class="img"/>
      <hr>
      <router-link to="/">
        <i class="fas fa-home"></i> Dashboard
      </router-link>

      <router-link to="/project">
        <i class="fas fa-tasks"></i> Projects
      </router-link>


      <router-link to="/logout">
        <i class="fas fa-sign-out-alt"></i> Log Out
      </router-link>

    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavComponent',
  }
  </script>
  
  <style scoped>
  
  </style>
  