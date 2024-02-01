

<template>
    <nav>
      <img src="@/assets/logo.jpg" alt="wordPilotLogo" class="img"/>
      <hr>
      <router-link to="/">
        <i class="fas fa-home"></i> Dashboard
      </router-link>

      <router-link to="/projects">
        <i class="fas fa-tasks"></i> Projects
      </router-link>

      <router-link to="/scheduler">
        <i class="far fa-calendar-alt"></i> Schedulers
      </router-link>

      <router-link to="/content-wizard">
        <i class="fas fa-magic"></i> Content Wizard
      </router-link>

      <router-link to="/document">
        <i class="far fa-file"></i> Document
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
  