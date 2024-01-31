<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


route::resource('user', App\Http\Controllers\Users\UserController::class)->only('store');
Route::middleware('auth:sanctum')->group(function() {
    route::get('/user',function(){
        return 'route is protected ';
    });
  
   
});