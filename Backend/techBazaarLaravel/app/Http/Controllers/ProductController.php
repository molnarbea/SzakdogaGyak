<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
       return Product::al(); 
    }

    public function store(Request $request)
    {
        $record = new Product();
        $record->fill($request->all())->save(); 
    }

    public function show(Product $product)
    {
         return $product;
    }

    public function update(Request $request, Product $product)
    {
       $product->fill($request->all())->save(); 
    }

    public function destroy(Product $product)
    {
        $product->delete();
    }
}
