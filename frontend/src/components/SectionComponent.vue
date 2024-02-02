

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
            <tr v-for="( task, index ) in tasks" :key="task.id">
            
              <td>{{ (currentPage - 1) * itemsPerPage + index + 1 }}</td>
              <td>{{ task.name }}</td>
              <td>{{ task.description }}</td>
              <td>Start Time: {{ task.start_time }}</td>
              <td>End Time: {{ task.end_time }}</td>
              <td>Edit</td>
              <td>Delete</td>
              
              </tr>
        </tbody>
      </table>
      
      <div  class="pagination">
        <ul  v-for="( link ) in links" :key="link.label">
          <li  class="page-item" @click="fetchTask(link.label)">
            <router-link to="#">{{ getFormattedLabel(link.label) }}</router-link>
          </li>
        </ul>
      </div>
      
        
      
    </section>

</template>

<script setup>

  import { ref, onMounted} from 'vue';
  import api from '../axios';
  const tasks = ref('');
  const links = ref('');
  const currentPage = ref(1); 
  const itemsPerPage = ref(2);
  const totalPage = ref(2);

  const getFormattedLabel = (label) => {
   
    if (label === "&laquo; Previous") {
       return 'Previous';
    }
    else if (label === "Next &raquo;") {
       return 'Next';
    } else {
       return label;
     }
  };

  const fetchTask = async(page)=>{
    if (page === "&laquo; Previous") {
       
        if(currentPage.value > 2){
           page = currentPage.value -1;
        }else{
           page = totalPage.value;
        }
    }
    else if (page === "Next &raquo;") {
     
        if(currentPage.value < totalPage.value){
            page = currentPage.value + 1;
          }else{
            page = 1;
          }
    }
    try {
              const response = await api.get('tasks',{

                params:{page}
              });
        
              if (response && response.status === 200) {
                   
                    tasks.value= response.data.data;
                    links.value= response.data.links;
                    itemsPerPage.value=response.data.per_page; // record per page
                    currentPage.value = response.data.current_page; // current page no
                    totalPage.value = response.data.total; // total pages
                  
                   
                   
              } else {
                    // return { success: false, response: 'Invalid credentials' };
              }
            } catch (error) {
                  console.log(error);
                 return { success: false, response: error};
            }
  }

  onMounted(async (page=1) => {
    fetchTask(page)
  })


</script>

<style>
section{
margin-top:1em;
background:white;
}

</style>
