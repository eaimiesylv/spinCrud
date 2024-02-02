<template>
  <main>
    

    <div id="main_content" class="col-md-6 offset-md-3 mt-3">
      <img src="@/assets/logo.jpg" class="mx-auto d-block img" alt="Task Scheduler" />
      <form @submit.prevent="login" class="mt-3">
        <div  v-if="error" class="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>{{  error_msg }}</strong>
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="d-flex ">
          <button type="submit" class="btn btn-primary" :disabled="loading">{{ loading ? 'Please wait...' : 'Submit' }}</button>
          <h6  @click="redirectToRegister">Click here to register an account</h6>
      </div>
      </form>
    </div>
  </main>
</template>

<script>
import useAuthStore from '../store';

export default {
  name: 'IndexPage',
  data() {
    return {
      email: '',
      password: 'test*1234',
      loading: false,
      error:false,
      error_msg:'',
    };
  },
  methods: {
    async login() {
      try {
        this.loading = true;
        const { success, response } = await useAuthStore().login({
          email: this.email,
          password: this.password,
        });

        if (success) {
          this.$router.push('/dashboard');
        } else {
          this.error = true;
          this.error_msg =response.response.data.message;
         
        }
      } finally {
        this.loading = false;
      }
    },
    redirectToRegister() {
      // Implement your logic to redirect to the registration page
      console.log('Redirect to register');
    },
  },
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
</style>
