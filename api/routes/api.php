<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::group(['prefix'=>'v1'], function(){

    route::post('login', App\Http\Controllers\Auth\AuthController::class);

    route::resource('user', App\Http\Controllers\Users\UserController::class)->only('store');


    route::resource('task', App\Http\Controllers\Task\TaskController::class);

});

Route::middleware('auth:sanctum')->group(function() {
    route::get('/user',function(){
        return 'route is protected ';
    });
  
   
});