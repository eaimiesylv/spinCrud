<?php

namespace App\Services\TaskService;
use App\Models\Task;



class TaskRepository
{
   
    

    public function createTask(array $data)
    {
       
        return Task::Create($data);
    }

   
}
