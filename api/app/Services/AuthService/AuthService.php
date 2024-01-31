<?php

namespace App\Services\AuthService;
use App\Services\UserService\UserRepository;
use Illuminate\Support\Facades\Hash;


class AuthService
{
    protected UserRepository $userRepository;
    

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;

    }

    
    public function authenticateUser(array $request)
    {
    
        $user = $this->userRepository->authenticateUser($request);
        if(!Hash::check($request['password'], $user->password)){
                   
                   
            return ['Wrong Credentials'];
       } 
        return [$user->createToken('api-token')->plainTextToken, $user];
      
       
    }
    
    
   
   
}