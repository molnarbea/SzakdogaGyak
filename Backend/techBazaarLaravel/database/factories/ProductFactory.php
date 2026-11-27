<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //#[Fillable(['seller_id', 'title', 'description', 'color', 'price', 'condition_status', 'is_sold', 'is_active'])]
            'seller_id' => User::all()->random()->id,
            'title' => fake()->word(),
            'description' => fake()->word(),
            'color' => fake()->word(),
            'price' => fake()->numberBetween(500, 1000000),
            'condition_status' => fake()->randomElement(["Factory New", "Minimal Wear", "Field-Tested", "Well-Worn", "Battle-Scarred"]),
            'is_sold' => fake()->boolean(),
            'is_active' => fake()->boolean(),
            'img' => fake()->imageUrl(),
        ];
    }
}
