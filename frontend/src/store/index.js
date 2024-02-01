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
        setAuthData({ token, user }) {
            this.token = token;
            this.user = user;
            this.updateLocalStorage();
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
                    console.log('logout')
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
