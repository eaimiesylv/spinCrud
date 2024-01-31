<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use App\Models\Task;

class TaskTest extends TestCase
{
    use RefreshDatabase;
    protected $task;
    protected $user;

    public function setUp(): void
    {

        parent::setUp();

        $this->user = User::factory()->create([
            'email' => 'user@gmail.com',
        ]);

        $this->actingAs($this->user);

        $this->task = [
            "name" => "test",
            "description" => "this is the first tast",
            "start_time" => "2024-02-03",
            "end_time" => "2024-10-03"
        ];


    }
    public function test_that_a_user_can_create_a_task(): void
    {
        $response = $this->postJson('/api/v1/tasks', $this->task);

        $response->assertStatus(201); 

        $this->assertDatabaseHas('tasks', $this->task);
    }
}
