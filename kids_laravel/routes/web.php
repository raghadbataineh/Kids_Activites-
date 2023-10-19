<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\EventController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/index', function () {
    return view('Admin.index');
})->name('index');

 Route::resource("/category", CategoryController::class);
Route::resource("/event", EventController::class);
Route::get('/eventsdetail/{id}', [EventController::class, 'show'])->name('orderdetails');
