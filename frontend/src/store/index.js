import { defineStore } from 'pinia'
const useAuthStore = defineStore({
    id:'login_id',
    state(){ 
        const storedToken = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');
        
        return {
            token: storedToken ? JSON.parse(storedToken) : null,
            user: storedUser ? JSON.parse(storedUser) : {},
            
        }
    },
    getters:{
        getUser(state) {
            return state.user
        }
    },
    actions: {
        setAuthData({ token, user }) {
            this.token = token;
            this.user = user;
          },
      
          clearAuthData() {
            this.token = null;
            this.user = null;
          },
        logout(){
            this.token=null
            this.user={}
           
            
        }
    }
})
export default useAuthStore;
    