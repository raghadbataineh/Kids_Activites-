<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use RealRashid\SweetAlert\Facades\Alert;


class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function category()
    {
        $category = Category::all();
        return response()->json($category);
    }


    public function index()
    {
        $category = Category::all();
        return view ('Admin.category.category')->with('category', $category);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('Admin.category.Addcategory');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    // public function uploadImage(Request $request, $fieldName, $uploadPath)
    // {
    //     if ($request->hasFile($fieldName)) {
    //         $image = $request->file($fieldName);
    //         $imageName = time() . '.' . $image->getClientOriginalExtension();
    //         $image->move(public_path($uploadPath), $imageName);
    //         return $uploadPath . '/' . $imageName;
    //     }

    //     return null; // Return null if no image was uploaded
    // }

    public function store(Request $request)
    {
        $request->validate([
            'image' => ['required', 'image', 'max:4192'],
            'name' => ['required', 'max:200'],
            'short_description' => ['required', 'max:500'],
            'long_description' => ['required', 'max:1000'],
            'age' => ['required', 'max:200'],
        ]);

        $category = new Category();

        if ($request->hasFile('image')) {
            $filename = $request->getSchemeAndHttpHost() . '/assets/img/' . time() . '.' . $request->image->extension();
            $request->image->move(public_path('/assets/img/'), $filename);
            $category->image = $filename;
        }
        $category->name = $request->name;
        $category->short_description = htmlspecialchars($request->short_description);
        $category->long_description = htmlspecialchars($request->long_description);
        $category->age = $request->age;

        $category->save();
        Alert::success('success', ' Added Successfully');
        return redirect('category')->with('flash_message', 'Category Created Successfully!');
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $category = Category::find($id);
        return view ('Admin.category.edit')->with('category', $category);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
{
    $category = Category::find($id);

    $category->name = $request->name;
    $category->short_description = $request->short_description;
    $category->long_description = $request->long_description;
    $category->age = $request->age;


    if ($request->hasFile('image')) {
        $filename = $request->getSchemeAndHttpHost() . '/assets/img/' . time() . '.' . $request->image->extension();
        $request->image->move(public_path('/assets/img/'), $filename);
        $category->image = $filename;
    }

    $category->save();
    Alert::success('success', ' Updated Successfully');
    return redirect('category')->with('flash_message', 'Category Updated!');
}

    

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Category::destroy($id);
        Alert::success('success', ' Deleted Successfully');
        return redirect ('category')->with('flash_message', 'Category deleted!'); 
    }
}
