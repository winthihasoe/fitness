<?php

use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PageController::class, 'index'])->name('home');
Route::get('/design-one', [PageController::class, 'designOne'])->name('design-one');
Route::get('/design-two', [PageController::class, 'designTwo'])->name('design-two');
Route::get('/design-three', [PageController::class, 'designThree'])->name('design-three');
Route::get('/admin', [PageController::class, 'admin'])->name('admin');
