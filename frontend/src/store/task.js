import { defineStore } from 'pinia'
 import router from '../router'
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
              
                return { success: true, res: this.tasks };
            } else {
                return { success: false, res: 'Login successful' };
            }
          } catch (error) {
            return { success: false, res: error };
          }
        },
        async postTask(payLoad) {
            try {
              const response = await api.post('tasks', payLoad);
        
              if (response && response.status === 201) {
                    console.log(response.data)
                    this.tasks.data.unshift(response.data);
                    router.push('/dashboard')
                    return { success: true, response: 'Submisssion succesful' };
              } else {
                   console.log(response);
                    return { success: false, response: 'Error in data submitted' };
              }
            } catch (error) {
                  console.log(error);
                 return { success: false, response: error};
            }
          },

          async deleteTask(taskId) {
            try {
                const response = await api.delete(`tasks/${taskId}`);
        
              if (response && response.status === 200) {

                        const newTasks = { ...this.tasks };
                        newTasks.data = newTasks.data.filter(task => task.id !== taskId);
                
                        // Update the state with the new reactive copy
                        this.tasks.data = newTasks;
                     
                    return { success: true, response: 'data deleted successfully' };
              } else {
                   console.log(response);
                    return { success: false, response: 'deletion fail' };
              }
            } catch (error) {
                  console.log(error);
                 return { success: false, response: error};
            }
          },
      
      },
    });
export default useTaskStore;
