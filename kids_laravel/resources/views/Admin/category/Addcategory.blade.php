@extends('Admin.layout.master')
@section('title', 'Admin-AddCategory')

@section('content')
    <div class="content-wrapper">
        <!-- Content -->

        <div class="container-xxl flex-grow-1 container-p-y">


            <!-- Basic Layout -->
            <div class="row">
                <div class="card">
                    <div style="text-align: center;">
                      <h3 style="margin-top: 20px; ">Add Category</h3>
                      <br>
                  </div>  
                <div class="col-xl">
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">

                        </div>
                        <div class="card-body ">
                            <form action="{{ url('/category') }}" method="POST" enctype="multipart/form-data">
                                @csrf
                                <div class="mb-3">
                                    <label class="form-label" for="name">Category Name</label>
                                    <input type="text" class="form-control" id="name" placeholder="name"
                                        name='name' />
                                    @error('name')
                                        <span style="color: red"> {{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="short_description">Short Description</label>
                                    <input type="text" class="form-control" id="short_description" placeholder="Short Description" name="short_description"  />
                                    @error('short_description')
                                    <span style="color: red">{{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="long_description">Long Description</label>
                                    <input type="text" class="form-control" id="long_description" placeholder="Long Description" name="long_description"  />
                                    @error('long_description')
                                    <span style="color: red">{{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="age"> Age</label>
                                    <input type="text" class="form-control" id="age" placeholder="Age" name="age"  />
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
                                
                                </span><br>
                               
                                @error('image')
                                    <span style="color: red">{{ $message }}</span>
                                @enderror
                                </span><br>
                                <button type="submit" class="btn btn-primary">Add Category</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    @endsection
