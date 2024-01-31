<?php

namespace App\Http\Controllers\Users;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UserFormRequest;

class UserController extends Controller
{
    
    public function store(UserFormRequest $request)
    {
        return $request->all();
    }

   
}
