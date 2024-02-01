<template>
  <main>
    <div class="col-md-6 offset-md-3 mt-3">
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
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </main>
</template>

<script>
import api from '../axios';
import useAuthStore from '../store';

export default {
  name: 'IndexPage',
  data() {
    return {
      email: 'test@gmail.com',
      password: 'test*1234',
    };
  },
  methods: {
    async login() {
      try {
        const response = await api.post('login', {
          email: this.email,
          password: this.password,
        });
        if(response && (response.status === 200)){
            console.log(response);
            const token = response.data[0];
            const user = response.data[1];
            useAuthStore().setAuthData({ token, user });
            this.$router.push('/dashboard');
        }
        
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
  main {
    background: white;
  }
</style>
