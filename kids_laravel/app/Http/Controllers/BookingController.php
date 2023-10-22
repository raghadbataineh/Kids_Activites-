<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\BookingKids;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Stripe\Stripe;

class BookingController extends Controller
{


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Bookings = Booking::all();
        return response()->json($Bookings);
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



        // $data = Validator::make(
        //     $request->all(),
        //     [
        //         'phone' => ['required'],
        //         'address' => ['required'],
        //         'event_id' => ['required'],
        //         'kidsNum' => ['required'],
        //         'Total_price' => ['required'],
        //         'notes' => ['required'],
        //         'user_id' => ['required'],
        //         'kid.*' => ['required'],
        //         'age.*' => ['required'],
        //         'payment_method' => ['required'],
        //     ]
        // );
        // if ($data->fails()) {
        //     return response()->json(['errors' => $data->errors()->all()]);
        // }

        // if ($request->input('payment_method') == 'CreditCard') {

        //     try {
        //         $stripe = new \Stripe\StripeClient(env('STRIPE_SECRET'));
        //         $res = $stripe->tokens->create([
        //             'card' => [
        //                 'number' => $request->card_number,
        //                 'exp_month' => $request->exp_number,
        //                 'exp_year' => $request->exp_year,
        //                 'cvc' => $request->cvc,
        //             ],
        //         ]);

        //         Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));

        //         $response = $stripe->charges->create([
        //             'amount' => 2000,
        //             'currency' => 'usd',
        //             'source' => $stripe->id,
        //             'description' => $request->input('notes'),
        //         ]);

        //         return response()->json([$response->status], 201);

        //     } catch (Exception $ex) {
        //         return response()->json([['response' => 'Error']], 500);
        //     }
        // }


        $booking = new Booking;
        $booking->user_id = $request->input('user_id');
        $booking->phone = $request->input('phone');
        $booking->event_id = $request->input('event_id');
        $booking->address = $request->input('address');
        $booking->notes = $request->input('notes');
        $booking->payment_method = $request->input('payment_method');
        $booking->kidsNum = $request->input('kidsNum');
        $booking->Total_price = $request->input('Total_price');
        $booking->save();

        for ($i = 1; $i <= $request->input('kidsNum'); $i++) {
            $kidName = $request->input("kid{$i}");
            $kidAge = $request->input("age{$i}");

            if (!empty($kidName) && !empty($kidAge)) {
                $bookingKid = new BookingKids;
                $bookingKid->booking_id = $booking->id;
                $bookingKid->name = $kidName;
                $bookingKid->age = $kidAge;
                $bookingKid->save();
            }
        }



        return response()->json(['message' => 'Booking created successfully', 'booking' => $booking], 201);
    }




    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function show($id)
{
    $bookings = Booking::where('user_id', $id)
                    ->with('user')
                    ->select('id', 'address', 'kidsNum', 'Total_price', 'payment_method', 'notes')
                    ->get();
    return response()->json($bookings);
}


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function edit(Booking $booking)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Booking $booking)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function destroy(Booking $booking)
    {
        //
    }


}
