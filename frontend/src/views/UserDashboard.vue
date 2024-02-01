

<template>
  <div  id="container">
    <!--nav element-->
    <NavComponent />
    <!--main element--> 
    
    <main>
      <HeaderComponent />
      
    </main>
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";



export default {
  name: 'UserDashboard',
  components:{
    NavComponent,
    HeaderComponent
  }
  
}
</script>

