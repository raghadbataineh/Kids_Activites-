@extends('Admin.layout.master')
@section('title','Organizer-AddOrgnizer')

	@section('content')
    <div class="content-wrapper">
        <!-- Content -->

        <div class="container-xxl flex-grow-1 container-p-y">


          <!-- Basic Layout -->
          <div class="row">
            <div class="col-xl">
              <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                
                </div>
                <div class="card-body ">
                    <form action="{{ route('orgnizer.store') }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <div class="mb-3">
                            <label class="form-label" for="name">Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Name*" name="name" />
                            @error('name')
                                <span style="color: red">{{ $message }}</span>
                            @enderror
                        </div>
                    
                        <div class="mb-3">
                            <label class="form-label" for="image">Image</label>
                            <input type="file" class="form-control" id="image" name="image" />
                            @error('image')
                                <span style="color: red">{{ $message }}</span>
                            @enderror
                        </div>
                    
                        <div class="mb-3">
                            <label class="form-label" for="role">Role</label>
                            <input type="text" class="form-control" id="role" placeholder="Role*" name="role" />
                            @error('role')
                                <span style="color: red">{{ $message }}</span>
                            @enderror
                        </div>
                    
                        <div class="mb-3">
                            <label class="form-label" for="experience_year">Experience Year</label>
                            <input type="number" class="form-control" id="experience_year" placeholder="Experience Year*" name="experience_year" />
                            @error('experience_year')
                                <span style="color: red">{{ $message }}</span>
                            @enderror
                        </div>
                    
                        <div class="mb-3">
                            <label class="form-label" for="phone">Phone</label>
                            <input type="text" class="form-control" id="phone" placeholder="Phone*" name="phone" />
                            @error('phone')
                                <span style="color: red">{{ $message }}</span>
                            @enderror
                        </div>
                    
                        <div class="mb-3">
                            <label class="form-label" for="email">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Email*" name="email" />
                            @error('email')
                                <span style="color: red">{{ $message }}</span>
                            @enderror
                        </div>
                    
                        <div class="mb-3">
                            <label class="form-label" for="facebook">Facebook</label>
                            <input type="text" class="form-control" id="facebook" placeholder="Facebook" name="facebook" />
                            @error('facebook')
                                <span style="color: red">{{ $message }}</span>
                            @enderror
                        </div>
                    
                        <div class="mb-3">
                            <label class="form-label" for="instagram">Instagram</label>
                            <input type="text" class="form-control" id="instagram" placeholder="Instagram" name="instagram" />
                            @error('instagram')
                                <span style="color: red">{{ $message }}</span>
                            @enderror
                        </div>
                    
                        <div class="mb-3">
                            <label class="form-label" for="experience_description">Experience Description</label>
                            <textarea class="form-control" id="experience_description" placeholder="Experience Description*" name="experience_description"></textarea>
                            @error('experience_description')
                                <span style="color: red">{{ $message }}</span>
                            @enderror
                        </div>
                    
                        <button type="submit" class="btn btn-primary">Add Organizer</button>
                    </form>
                    
                </div>
              </div>
            </div>
        
          </div>
        </div>
    @endsection