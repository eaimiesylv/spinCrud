<template>
  <main>
    <div id="main_content" class="col-md-6 offset-md-3 mt-3">
      <img src="@/assets/logo.jpg" class="mx-auto d-block img" alt="Task Scheduler" />
      <form @submit.prevent="login" class="mt-3">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
        <button type="submit" class="btn btn-primary">Register</button>
      </form>
    </div>
  </main>
</template>

<script>
// import api from '../axios';
import useAuthStore from '../store';

export default {
  name: 'IndexPage',
  data() {
    return {
      email: '',
      password: 'test*1234',
    };
  },
  methods: {
    async login() {
      const { success, message } = await useAuthStore().login({
        email: this.email,
        password: this.password,
      });

      if (success) {
        this.$router.push('/dashboard');
      } else {
        console.log(message);
       
      }
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
    padding:3em;
  }
</style>
