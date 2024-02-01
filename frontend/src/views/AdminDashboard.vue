

<template>
  <div  id="container">
    <NavComponent /> 
    <main>
      <HeaderComponent />
      <SectionComponent /> 
    </main>
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import SectionComponent from "@/components/SectionComponent.vue";
export default {
  name: 'AdminDashboard',
  components:{
    NavComponent,
    SectionComponent,
    HeaderComponent
  }
}
</script>

