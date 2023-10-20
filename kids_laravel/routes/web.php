<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\EventController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrganizerController;
use App\Http\Controllers\ReviewController;




Route::resource("/category", CategoryController::class);
Route::get('/', function () {
    return view('Admin.index');
})->name('index');

Route::resource("/category", CategoryController::class);
Route::resource('orgnizer', OrganizerController::class);
Route::resource("/review", ReviewController::class);

Route::resource("/event", EventController::class);
Route::get('/eventsdetail/{id}', [EventController::class, 'show'])->name('orderdetails');
