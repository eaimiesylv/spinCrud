<?php

namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\AuthFormRequest;
use App\Services\AuthService\AuthService;

class AuthController extends Controller
{
    
    protected AuthService $authService;

    public function __invoke(AuthService $authService)
    {
        $this->authService = $authService;

    }
   
    public function store(AuthFormRequest $request)
    { 	
            dd('authoer');
            return $this->authService->createUser($request->all());
        
    }
   
}
