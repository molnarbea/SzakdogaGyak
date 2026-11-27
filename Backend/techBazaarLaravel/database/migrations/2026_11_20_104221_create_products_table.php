<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * #[Fillable(['seller_id', 'title', 'description', 'color', 'price', 'condition_status', 'is_sold', 'is_active'])]
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('seller_id')->constrained('users');
            $table->string('title');
            $table->string('description');
            $table->string('color');
            $table->integer('price');
            $table->string('condition_status');
            $table->boolean('is_sold');
            $table->boolean('is_active');
            $table->string('img');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
