<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
       return User::all();
    }

    public function store(Request $request)
    {
        $record = new User();
        $record->fill($request->all())->save();
    }

    public function show(User $user)
    {
        return User::find($user);
    }

    public function update(Request $request, User $user)
    {
        $user->fill($request->all())->save();
    }
    
    public function destroy(User $user)
    {
        $user->delete();
    }
}
