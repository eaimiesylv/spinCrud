

<template>
  <div  id="container">
    <!--nav element-->
    <NavComponent />
    <!--main element--> 
    {{  user.user }}
    <main>
      <HeaderComponent />
      
    </main>
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import useAuthStore from '../store';


export default {
  name: 'UserDashboard',
  components:{
    NavComponent,
    HeaderComponent
  },
  data(){
     return{
        user:''
    }
  },
  mounted(){
  
    this.user = useAuthStore();
    console.log(this.user)
  }
}
</script>

