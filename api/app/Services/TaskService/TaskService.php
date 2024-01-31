<?php

namespace App\Services\TaskService;
use App\Services\TaskService\TaskRepository;


class TaskService
{
    protected TaskRepository $taskRepository;
    

    public function __construct(TaskRepository $taskRepository)
    {
        $this->taskRepository = $taskRepository;

    }

    
    public function createTask(array $all)
    {
    
        return $this->taskRepository->createTask($all);
       
    }
    
    
   
   
}