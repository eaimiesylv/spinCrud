<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class UserTest extends TestCase
{
    use RefreshDatabase;

    public function test_example(): void
    {
        $userData = [
            'name' => 'Test user',
            'email' => 'user@gmail.com',
            'password' => 'password123',
            'password_confirmation'=>'password123'
        ];

        $response = $this->post('api/user', $userData);

        $response->assertStatus(201);

        $user = User::where('email', 'user@gmail.com')->first();

        $this->assertCredentials([
            'email' => 'user@gmail.com',
            'password' => 'password123',
        ]);
    }
}
