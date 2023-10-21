<?php

namespace App\Http\Controllers;

use App\Models\BookingKids;
use App\Models\Booking;
use Illuminate\Http\Request;

class BookingKidsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $booking = Booking::all();
        return view('Admin.booking.booking', compact('booking'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\BookingKids  $bookingKids
     * @return \Illuminate\Http\Response
     */
    // public function show(BookingKids $bookingKids)
    public function show($booking)
    {
        $Booking = Booking::where('id', $booking)->first(); // Use first() to get a single result
        $bookingKids = BookingKids::where('booking_id', $booking)->get();

        return view('Admin.booking.bookingkids', compact('Booking', 'bookingKids')); // Use consistent variable names
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\BookingKids  $bookingKids
     * @return \Illuminate\Http\Response
     */
    public function edit(BookingKids $bookingKids)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\BookingKids  $bookingKids
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, BookingKids $bookingKids)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BookingKids  $bookingKids
     * @return \Illuminate\Http\Response
     */
    public function destroy(BookingKids $bookingKids)
    {
        //
    }
}
