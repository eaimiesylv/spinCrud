<template>
  <main>
    <div id="main_content" class="col-md-6 offset-md-3 mt-3">
      <img src="@/assets/logo.jpg" class="mx-auto d-block img" alt="Task Scheduler" />
      <form  @submit.prevent="login">
          
          <div v-if="error" class="alert alert-danger alert-dismissible fade show mt-3" role="alert">
              <strong>{{ error_msg }}</strong>

              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

          </div>
          <div>
             
              <ReusableForm :fields="formFields"/>
             
           </div>  
           <div class="d-flex justify-content-between mt-3">

              <button type="submit" class="btn btn-primary" :disabled="loading">{{ loading ? 'Please wait...' : 'Submit' }}</button>

              <router-link to="/register">Create an account</router-link>
            </div>
       </form>
      
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useAuthStore from '../store';
import ReusableForm from "@/components/base/ReusableForm.vue";

// const email = ref('');
// const password = ref('test*1234');
const loading = ref(false);
const error = ref(false);
const error_msg = ref('');
const router = useRouter();


const formFields = ref([
 
{ type: 'email', label: 'Email', databaseField: 'email', required: true ,placeholder:'Enter your email address'},
  { type: 'password', label: 'password', databaseField: 'password', required: true ,placeholder:'Enter Password'},


]);

const login = async () => {
  try {
    loading.value = true;
    const payLoad = {}; 
 
    formFields.value.forEach(field => {
      payLoad[field.databaseField] = field.value;
    })
    
    const { success, response } = await useAuthStore().login(payLoad);

    if (success) {
      router.push('/dashboard');
    } else {
      error.value = true;
      error_msg.value = response.response?.data?.message || response.message;

    }
  } finally {
    loading.value = false;
  }
};


</script>

<style scoped>
  main {
    background: #F2F1F9;
  }
  #main_content {
    background: white !important;
    padding: 3em;
  }
  h6 {
    color: blue;
    cursor: pointer;
  }
</style>
