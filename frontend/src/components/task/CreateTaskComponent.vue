<template>
       <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Create Task
      </button>

      <!-- Modal -->
      <div class="modal  fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
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

                    </div>
              </form>
            </div>
            
          </div>
        </div>
      </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ReusableForm from "@/components/base/ReusableForm.vue";
  const formFields = ref([
 
 { type: 'email', label: 'Task Name', databaseField: 'name', required: true },
 { type: 'text-area', label: 'Task Description', databaseField: 'description', required: true },
 { type: 'date', label: 'Start date', databaseField: 'start_time', required: true },
 { type: 'date', label: 'End date', databaseField: 'end_time', required: true },


]);
  </script>
  
  
  