@extends('Admin.layout.master')
@section('title', 'Admin-EditCategory')

@section('content')
<div class="content-wrapper">
    <div class="container-xxl flex-grow-1 container-p-y">
        <!-- Basic Layout -->
        <div class="row">
            <div class="card">
                <div style="text-align: center;">
                  <h3 style="margin-top: 20px; ">Edit Category</h3>
                  <br>
              </div> 
            <div class="col-xl">
                <div class="card mb-4">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <!-- Add a title here if needed -->
                    </div>
                    <div class="card-body">
                        <form action="{{ url('category/' . $category->id) }}" method="POST" enctype="multipart/form-data">
                            @csrf
                            @method('PATCH')
                            <div class="mb-3">
                                <label class="form-label" for="name">Category Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Name" name="name" value="{{ $category->name }}" />
                                @error('name')
                                <span style="color: red">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="short_description">Short Description</label>
                                <input type="text" class="form-control" id="short_description" placeholder="Short Description" name="short_description" value="{{ $category->short_description }}" />
                                @error('short_description')
                                <span style="color: red">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="long_description">Long Description</label>
                                <input type="text" class="form-control" id="long_description" placeholder="Long Description" name="long_description" value="{{ $category->long_description }}" />
                                @error('long_description')
                                <span style="color: red">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="age"> Age</label>
                                <input type="text" class="form-control" id="age" placeholder="Age" name="age" value="{{ $category->age }}" />
                                @error('age')
                                <span style="color: red">{{ $message }}</span>
                                @enderror
                            </div>
                            <!-- Image -->
                            <div class="mb-3">
                                <label class="form-label" for="image">Image</label>
                                <input type="file" name="image" id="image">
                            </div>
                            @error('image')
                            <span style="color: red">{{ $message }}</span>
                            @enderror
                            <!-- Submit Button -->
                            <button type="submit" class="btn btn-primary">Edit Category</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
