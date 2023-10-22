<?php

use App\Http\Controllers\EventController;
use App\Http\Controllers\ReviewController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\OrganizerController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\BookingKidsController;

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

Route::resource('updateProfile', UserController::class);
Route::get('/seeUser/{id}',[ReviewController::class,'show']);
Route::get('/seeBooking/{id}',[BookingController::class,'show']);
Route::get('/seeBookingKids/{id}',[BookingKidsController::class,'show']);
// Route::put('/updateProfile/{id}',[UserController::class,'update']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/sign', [UserController::class, 'userCreate']);
Route::post('login', [UserController::class, 'userCheck']);



// Route::resource('orgnizers', OrganizerController::class);
Route::get('orgnizers', [OrganizerController::class , 'shoew_orgnizer']);
Route::get('orgnizers/{id}', [OrganizerController::class , 'show_details']);
Route::get('/events/{id}',[EventController::class,'Events']);
// Route::get('/events',[EventController::class,'Events']);
Route::get('/EventDetails/{id}',[EventController::class,'EventDetails']);
Route::get('/category',[CategoryController::class,'index']);
Route::post('/storeReview',[ReviewController::class,'storeReview']);
Route::get('/showReview/{id}',[ReviewController::class,'showReview']);
Route::get('/seeReview/{id}',[ReviewController::class,'show']);
Route::get('/category',[CategoryController::class,'category']);
Route::post('/deleteReview',[ReviewController::class,'deleteReview']);


Route::resource('bookings', BookingController::class);
