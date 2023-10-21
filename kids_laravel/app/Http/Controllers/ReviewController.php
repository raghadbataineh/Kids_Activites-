<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Models\Category;
use Illuminate\Http\Request;
use RealRashid\SweetAlert\Facades\Alert;


class ReviewController extends Controller
{

    public function index()
    {
        $reviews = Review::with('user', 'category')->get();
        return view('Admin.reviews.index', ['review' => $reviews]);
    }



    public function storeReview(Request $request)
    {
        $edit = $request->id;
        if ($edit == null)
            $review = Review::create([
                'comment' => $request->comment,
                'user_id' => $request->user_id,
                'category_id' => $request->category_id,
            ]);

        if ($edit != null) {
            $review = Review::where('id', $request->id)->update([
                'comment' => $request->comment,
            ]);
        }
        return response()->json($review);
    }
    public function showReview($id)
    {

        $review = Review::where('category_id',$id)->with('user')->get();
        return response()->json($review);
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
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $reviews = Review::where('user_id', $id)->with('user')->get();
        return response()->json($reviews);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function edit(Review $review)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Review $review)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Review::destroy($id);
        Alert::success('success', ' Deleted Successfully');
        return redirect('review')->with('flash_message', 'Review deleted!');
    }
    public function deleteReview(Request $request)
    {
        $id = $request->id;
        Review::destroy($id);
        return response()->json($id, 201);
    }
}
