<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Event;
use App\Models\Organizer;
use App\Models\User;
use Illuminate\Http\Request;
use RealRashid\SweetAlert\Facades\Alert;
class EventController extends Controller
{

    public function index()
    {
        $event = Event::with('organizer', 'category')->get();
        return view('Admin.event.event', compact('event'));

    }

    public function Events($id)
    {
        $events = Event::where('category_id', $id)->with(['category', 'organizer'])->get();
        $category=Category::all();
        $cat=Category::find($id);
        return response()->json(["events"=>$events,"category"=>$category,'cat'=>$cat]);
    }
    //    public function Events()
    // {
    //     $events = Event::with(['category', 'organizer'])->get();
    //     $category=Category::all();
    //     return response()->json(["events"=>$events,"category"=>$category]);
    // }
    public function EventDetails($id)
    {
        $events = Event::with('organizer')->find($id);

        return response()->json($events);
    }
    public function create()
    {
        $category = Category::all();
        $organizer = Organizer::all();
        return view('Admin.event.addevent', compact('category', 'organizer'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,jfif|max:2048',
            'long' => 'required',
            'image2' => 'required|image|mimes:jpeg,png,jpg,gif,jfif|max:2048',
            'location' => 'required',
            'end' => 'required',
            'start' => 'required',
            'date' => 'required',
            'short' => 'required',
        ]);
        
        $image = $request->getSchemeAndHttpHost() . '/images/events/' . 'image_' . time() . '.' . $request->file('image')->extension();
        $request->file('image')->move(public_path('images/events'), $image);
        
        $image2 = $request->getSchemeAndHttpHost() . '/images/events/' . 'image2_' . time() . '.' . $request->file('image2')->extension();
        $request->file('image2')->move(public_path('images/events'), $image2);
        

        Event::create([
            'name' => $request->name,
            'image' => $image,
            'image2' => $image2,
            'status' => $request->status,
            'short_description' => $request->long,
            'long_description' => $request->short,
            'category_id' => $request->category,
            'organize_id' => $request->organizer,
            'start_time' => $request->start,
            'end_time' => $request->end,
            'price' => $request->price,
            'location' => $request->location,
            'date' => $request->date,
        ]);
        Alert::success('success', ' Added Successfully');
        return redirect('event');
    }


    public function show($id)
    {
        $event = Event::where('id', $id)->with('organizer', 'category')->get();
        return view('Admin.event.eventdetail', compact('event'));
    }


    public function edit($id)
    {
        $event = Event::find($id);
        $category = Category::all();
        $organizer = Organizer::all();
        return view('Admin.event.edit', compact('event','category', 'organizer'));

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string',
            'image' => 'image|mimes:jpeg,png,jpg,gif,jfif',
            'long' => 'required',
            'image2' => 'image|mimes:jpeg,png,jpg,gif,jfif',
            'location' => 'required',
            'end' => 'required',
            'start' => 'required',
            'date' => 'required',
            'short' => 'required',
            'price' => 'required|numeric',
        ]);
    
        $event = Event::find($id);
    
        if ($request->hasFile('image')) {
            $image = $request->getSchemeAndHttpHost() . '/images/events/' . 'image_' . time() . '.' . $request->file('image')->extension();
            $request->file('image')->move(public_path('images/events'), $image);
        } else {
            $image = $event->image; 
        }
    
        if ($request->hasFile('image2')) {
            $image2 = $request->getSchemeAndHttpHost() . '/images/events/' . 'image2_' . time() . '.' . $request->file('image2')->extension();
            $request->file('image2')->move(public_path('images/events'), $image2);
        } else {
            $image2 = $event->image2; 
        }
    
        $event->update([
            'name' => $request->name,
            'image' => $image,
            'image2' => $image2,
            'status' => $request->status,
            'short_description' => $request->long,
            'long_description' => $request->short,
            'category_id' => $request->category,
            'organize_id' => $request->organizer,
            'start_time' => $request->start,
            'end_time' => $request->end,
            'price' => $request->price,
            'location' => $request->location,
            'date' => $request->date,
        ]);
        Alert::success('success', 'Updated Added Successfully');
        return redirect('event');
    }
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Event::find($id)->delete();
        Event::destroy($id);
        Alert::success('success', 'Event Deleted Successfully');
        return redirect('event');
    }
}
