<?php

namespace App\Services\UserService;
use Illuminate\Support\Facades\DB;
use App\Models\User;


class UserRepository
{
   
    public function createUser(array $data)
    {
      
        return User::Create($data);
    }

   
}
