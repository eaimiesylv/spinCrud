

<template>
       
    <section>
      <div v-if="err" class="alert alert-danger alert-dismissible fade show mt-3" role="alert">
              <strong>{{ error_msg }}</strong>


      </div>
      <table class="table">
        <thead>
          <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Start time</th>
              <th scope="col">End time</th>
              <th scope="col">Status</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>

          </tr>
        </thead>
        <tbody v-if="tasks && tasks.length > 0">
            <tr v-for="(task, index) in tasks" :key="task.id">
              <td>{{ (currentPage - 1) * itemsPerPage + index + 1 }}</td>
              <td>{{ task.name }}</td>
              <td>{{ task.description }}</td>
              <td> {{ task.start_time }}</td>
              <td>{{ task.end_time }}</td>
              <td>{{ task.status }}</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
        </tbody>
        <tbody v-else>
          <tr >
            <td colspan="8" style="color:red"><strong>No records found </strong></td>
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
  import api from '../../axios';
  const tasks = ref('');
  const links = ref('');
  const response = ref('');
  
  const currentPage = ref(1); 
  const itemsPerPage = ref(1);
  const totalPage = ref(1);
  const err = ref(false);
  const error_msg = ref('');

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
  const pageNo = (page)=>{

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
    return page;

  }
  const fetchTask = async(page)=>{
     page = pageNo(page);
    try {
              response.value = await api.get('tasks',{

                params:{page}
              });
        
              if (response.value && response.value.status === 200) {
                   
                    tasks.value= response.value.data.data;
                    links.value= response.value.data.links;
                    itemsPerPage.value=response.value.data.per_page; // record per page
                    currentPage.value = response.value.data.current_page; // current page no
                    totalPage.value = response.value.data.total; // total pages
                  
                   
                   
              } else {

                err.value = true;
                error_msg.value = response.value.response.data.message;
              }
            } catch (error) {
                err.value = true;
                console.log(error)
                error_msg.value = response.value.response?.data?.message || error.message;
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
