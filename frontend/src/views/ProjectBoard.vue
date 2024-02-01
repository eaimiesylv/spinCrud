

<template>
  <div  id="container">
    <!--nav element-->
    <NavComponent />
    Our Project board
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
  name: 'ProjectBoard',
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

