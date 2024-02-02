import { defineStore } from 'pinia'
// import router from '../router'
import api from '../axios';

const useTaskStore = defineStore({
    id: 'task_id',
    state: () => ({
        tasks: []
      }),
    
      getters: {
        getTasks(state) {
            return state.tasks
        }
    },
    actions: {
        async fetchTask(page) {
            
          try {
            const response = await api.get('tasks', {
              params: { page },
            });
    
            if (response.status === 200) {
              this.tasks = response.data;
              return { response: this.tasks};
            } else {
              // Handle error
            }
          } catch (error) {
            // Handle error
          }
        },
      },
    });
export default useTaskStore;
