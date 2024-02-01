<?php

namespace App\Services\TaskService;
use App\Models\Task;
use Illuminate\Database\QueryException;
use Illuminate\Database\Eloquent\ModelNotFoundException;



class TaskRepository
{
   
    

    public function createTask(array $data)
    {
        try {
             return Task::Create($data);

        } catch (QueryException $exception) {

            return response()->json(['message' => 'Insertion failed.'], 500);
        }
    }

    public function updateTask(array $request, $task)
    {
        try{

             $task->update($request);
             return $task;
        }
       catch (QueryException $exception){
        
            return response()->json(['message' => 'Task not found.'], 404);
        }
      
       

       
    }

   
}
