<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrganizerController;
use App\Http\Controllers\EventController;

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

Route::get('/', function () {
    return view('Admin.index');
})->name('index');

Route::resource("/category", CategoryController::class);


// Route::get('/dashboard', function () {
//     return view('Admin.index');
// });


// Route::resource('Admin/orgnizer', OrganizerController::class );
Route::resource('orgnizer', OrganizerController::class);

Route::resource("/event", EventController::class);
Route::get('/eventsdetail/{id}', [EventController::class, 'show'])->name('orderdetails');
