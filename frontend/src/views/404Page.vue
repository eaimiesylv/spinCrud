<template>
  <main>
    <div class="col-md-6 offset-md-3 mt-3">
      <img src="@/assets/logo.jpg" class="mx-auto d-block img" alt="Task Scheduler" />
        <p>This Page does not exit</p>
    </div>
  </main>
</template>

<script>
import api from '../axios';
import useAuthStore from '../store';

export default {
  name: '404Page',
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
