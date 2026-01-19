<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function index()
    {
        return Inertia::render('Home');
    }

    public function designOne()
    {
        return Inertia::render('DesignOne/index');
    }

    public function designTwo()
    {
        return Inertia::render('DesignTwo/index');
    }

    public function designThree()
    {
        return Inertia::render('DesignThree/index');
    }

    public function admin()
    {
        return Inertia::render('Admin/index');
    }
}
