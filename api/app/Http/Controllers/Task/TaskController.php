<?php

namespace App\Http\Controllers\Task;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\TaskFormRequest;
use App\Services\TaskService\TaskService;

class TaskController extends Controller
{
    
    protected TaskService $taskService;

    public function __construct(TaskService $taskService)
    {
        $this->taskService = $taskService;

    }
   
    public function store(TaskFormRequest $request)
    { 	
        
            return $this->taskService->createTask($request->all());
        
    }
   
}
