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

    
    public function createTask(array $request)
    {
    
        return $this->taskRepository->createTask($request);
       
    }

    public function updateTask(array $request, $task)
    {
    
        return $this->taskRepository->updateTask($request, $task);
       
    }
    
    
   
   
}