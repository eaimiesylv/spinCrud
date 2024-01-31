<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


route::post('/user',function(Request $request){
    return \App\Models\User::create($request->all());
});
Route::middleware('auth:sanctum')->group(function() {
    route::get('/user',function(){
        return 'route is protected ';
    });
  
   
});