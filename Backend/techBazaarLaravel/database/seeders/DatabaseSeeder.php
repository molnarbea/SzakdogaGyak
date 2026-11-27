<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        Product::create([
            'seller_id' => 1,
            'title' => 'AK-47 Redline',
            'description' => 'Kiváló állapotú AK-47 skin.',
            'color' => 'Red',
            'price' => 25000,
            'condition_status' => 'Field-Tested',
            'is_sold' => false,
            'is_active' => true,
            'img' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg72iT0T0hhEW5fzPhdfcMhGxsTssLr2EK86vGG51mMQ&s=10'
        ]);

        Product::create([
            'seller_id' => 2,
            'title' => 'AWP Asiimov',
            'description' => 'Népszerű AWP skin.',
            'color' => 'Orange',
            'price' => 120000,
            'condition_status' => 'Battle-Scarred',
            'is_sold' => true,
            'is_active' => false,
            'img' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ36HLksTsyYZZoIzMHD5rLnyHj5fX41yHhdMMrmbCXsg&s=10'

        ]);

        Product::create([
            'seller_id' => 3,
            'title' => 'M4A1-S Printstream',
            'description' => 'Fehér-fekete prémium skin.',
            'color' => 'White',
            'price' => 85000,
            'condition_status' => 'Minimal Wear',
            'is_sold' => false,
            'is_active' => true,
            'img' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFi5fwwHmDqAdOWHhc7AZFlp1zeDatMyGR2CoGVsoV4Q&s=10'
        ]);

        Product::create([
            'seller_id' => 1,
            'title' => 'Desert Eagle Blaze',
            'description' => 'Ritka Desert Eagle skin.',
            'color' => 'Black',
            'price' => 175000,
            'condition_status' => 'Factory New',
            'is_sold' => false,
            'is_active' => true,
            'img' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe5ecu5ZbvrHEEWG4u1YL_kP7S7nr9GCPU3RbF5dLRlA&s=10'
        ]);

        Product::create([
            'seller_id' => 4,
            'title' => 'USP-S Kill Confirmed',
            'description' => 'Egyedi designnal rendelkező USP-S.',
            'color' => 'Red',
            'price' => 65000,
            'condition_status' => 'Well-Worn',
            'is_sold' => true,
            'is_active' => false,
            'img' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ChOvY5zRgyXinpUl5jioqZIRtpeeinykUPVSSJeZ0g&s=10'
        ]);

        Product::create([
            'seller_id' => 2,
            'title' => 'Karambit Doppler',
            'description' => 'Prémium kés skin.',
            'color' => 'Purple',
            'price' => 500000,
            'condition_status' => 'Factory New',
            'is_sold' => false,
            'is_active' => true,
            'img' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf9jDntuKg7j40PhzsW49udnWTmtXVd-qtyzjqKmSrKg&s=10'
        ]);
    }
}