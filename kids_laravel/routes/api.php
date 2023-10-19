<?php

use App\Http\Controllers\EventController;
use App\Http\Controllers\ReviewController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrganizerController;
use App\Http\Controllers\CategoryController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::resource('orgnizers', OrganizerController::class);
Route::get('orgnizers', [OrganizerController::class , 'shoew_orgnizer']);
Route::get('orgnizers/{id}', [OrganizerController::class , 'show_details']);
Route::get('/events/{id}',[EventController::class,'Events']);

Route::get('/EventDetails/{id}',[EventController::class,'EventDetails']);
Route::get('/category',[CategoryController::class,'index']);
Route::post('/storeReview',[ReviewController::class,'storeReview']);
Route::get('/showReview',[ReviewController::class,'showReview']);
Route::get('/category',[CategoryController::class,'category']);
