<?php

namespace App\Http\Controllers;

use App\Models\Organizer;
use App\Models\Event;
use Illuminate\Http\Request;

class OrganizerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $orgnizers = Organizer::all();
        return view ('Admin/orgnizer/orgnizerlist', compact('orgnizers'));
    }
    public function shoew_orgnizer()
    {
        $orgnizers = Organizer::all();
        return response()->json($orgnizers);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('Admin\orgnizer\addorgnizer');

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $organizer = new Organizer();
    
        $request->validate([
            'name' => 'required',
            'role' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,jfif|max:2048',
            'experience_year' => 'required|integer',
            'phone' => 'required',
            'email' => 'required|email',
            'experience_description' => 'required',
            'facebook' => 'nullable|url',
            'instagram' => 'nullable|url',
        ]);
    
        $organizer->name = $request->input('name');
        $organizer->role = $request->input('role');
        $organizer->experience_year = $request->input('experience_year');
        $organizer->phone = $request->input('phone');
        $organizer->email = $request->input('email');
        $organizer->experience_description = $request->input('experience_description');
    
        if ($request->hasFile('image')) {
            $filename = $request->getSchemeAndHttpHost() . '/assets/img/' . time() . '.' . $request->image->extension();
            $request->image->move(public_path('/assets/img/'), $filename);
            $organizer->image = $filename;
        }
    
        if ($request->has('facebook')) {
            $organizer->facebook = $request->input('facebook');
        }
    
        if ($request->has('instagram')) {
            $organizer->instagram = $request->input('instagram');
        }
    
        $organizer->save();
    
        return redirect()->route('orgnizer.index')->with('success', 'Organizer created successfully');
    }
    

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Organizer  $organizer
     * @return \Illuminate\Http\Response
     */
    public function show( $id)
    {
        $orgnizer = Organizer::find($id);
    return view('Admin/orgnizer/orgnizerdetail', compact('orgnizer'));
    }
    public function show_details( $id)
    {
        
        $orgnizer = Organizer::find($id);
        $events = Event::where('organize_id', $id)->with(['category', 'organizer'])->get();
        // $cat=Category::find($id);
        return response()->json(["events"=>$events,"orgnizer"=>$orgnizer]);
        // return response()->json($orgnizer);
        // $orgnizer = Organizer::with('event')->find($id);
        // $events = $orgnizer->event;
        

        if (!$orgnizer) {
            return response()->json(['message' => 'Organizer not found'], 404);
        }
    

    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Organizer  $organizer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Organizer $organizer)
{
    $organizer->name = $request->input('name');
    $organizer->role = $request->input('role');
    $organizer->experience_year = $request->input('experience_year');
    $organizer->phone = $request->input('phone');
    $organizer->email = $request->input('email');
    $organizer->experience_description = $request->input('experience_description');

    if ($request->hasFile('new_image')) {
        $image = $request->file('new_image');
        $imageName = time() . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('images'), $imageName);
        $organizer->image = $imageName;
    }

    if ($request->has('facebook')) {
        $organizer->facebook = $request->input('facebook');
    } else {
        $organizer->facebook = null;
    }

    if ($request->has('instagram')) {
        $organizer->instagram = $request->input('instagram');
    } else {
        $organizer->instagram = null;
    }

    $organizer->save();

    return redirect()->route('organizers.index')->with('success', 'Organizer updated successfully');
}

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Organizer  $organizer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Organizer $organizer,$id)
    {
        
        Organizer::destroy($id);
    return back()->with('success', ' deleted successfully.');
    }
}
