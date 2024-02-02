

<template>
       
  <button class="btn btn-primary mt-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
         Create Task
 </button>
 <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">Offcanvas right</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          ...
        </div>
      </div>
 <section>
  <table class="table">
    <thead>
      <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Start time</th>
          <th scope="col">End time</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>

      </tr>
    </thead>
    <tbody>
        <tr v-for="task in tasks" :key="task.id">
          <td>{{ task.id }}</td>
          <td>{{ task.name }}</td>
          <td>{{ task.description }}</td>
          <td>Start Time: {{ task.start_time }}</td>
          <td>End Time: {{ task.end_time }}</td>
          <td>Edit</td>
          <td>Delete</td>
          
          </tr>
    </tbody>
  </table>
</section>

</template>

<script setup>
  //import useAuthStore from '../store';
  import { ref, onMounted} from 'vue';
  import api from '../axios';
  const tasks = ref(false);
  onMounted(async () => {
            try {
              const response = await api.get('tasks');
        
              if (response && response.status === 200) {
                    console.log(response.data.data)
                    tasks.value= response.data.data;
                    // return { success: true, response: 'Login successful' };
              } else {
                    // return { success: false, response: 'Invalid credentials' };
              }
            } catch (error) {
                  console.log(error);
                 return { success: false, response: error};
            }
          })


</script>

<style scoped>
section{
margin-top:1em;
background:white;
}
</style>
