import { defineStore } from 'pinia'
import router from '../router'
import api from '../axios';

const useAuthStore = defineStore({
    id: 'login_id',
    state() {
        const storedToken = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');

        return {
            token: storedToken ? JSON.parse(storedToken) : null,
            user: storedUser ? JSON.parse(storedUser) : {},
        }
    },
    getters: {
        getUser(state) {
            return state.user
        }
    },
    actions: {
        async login({ email, password }) {
            try {
              const response = await api.post('login', { email, password });
        
              if (response && response.status === 200) {
                    this.token = response.data[0];
                    this.user = response.data[1];
                    this.updateLocalStorage();
                    return { success: true, message: 'Login successful' };
              } else {
                    return { success: false, message: 'Invalid credentials' };
              }
            } catch (error) {
              console.log(error);
              return { success: false, message: error};
            }
          },
      

        clearAuthData() {
            this.token = null;
            this.user = null;
            this.updateLocalStorage();
        },

        async logout() {
            try {
                const response = await api.post('log-out');
                if(response && (response.status === 200)){
    
                    this.token = null;
                    this.user = {};
                    this.updateLocalStorage();
                    router.push('/');
                }
                
              } catch (error) {
                console.log(error);
              }
           
        },

        updateLocalStorage() {
            localStorage.setItem('token', JSON.stringify(this.token));
            localStorage.setItem('user', JSON.stringify(this.user));
        }
    },
  
    watch: {
        token(value) {
            localStorage.setItem('token', JSON.stringify(value));
        },
        user(value) {
            localStorage.setItem('user', JSON.stringify(value));
        }
    }
})

export default useAuthStore;
