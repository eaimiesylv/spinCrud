<?php

namespace App\Services\UserService;
use App\Models\User;



class UserRepository
{
   
    public function getUserByEmail($email){

        return  User::where('email', $email)->first();

    }
    public function authenticateUser(array $request)
    {
        return $this->getUserByEmail($request['email']);
        
    }

    public function createUser(array $data)
    {
      
        return User::Create($data);
    }

   
}
