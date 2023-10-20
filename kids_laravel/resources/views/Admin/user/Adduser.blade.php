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
                    <form action="{{ route('users.store') }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <div class="mb-3">
                            <label class="form-label" for="name">First name</label>
                            <input type="text" class="form-control" id="first_name" placeholder="first_name*" name="first_name" />
                            @error('first_name')
                                <span style="color: red">{{ $message }}</span>
                            @enderror
                        </div>
                    
                        <div class="mb-3">
                            <label class="form-label" for="image">Last name</label>
                            <input type="text" class="form-control" id="last_name" name="last_name" />
                            @error('last_name')
                                <span style="color: red">{{ $message }}</span>
                            @enderror
                        </div>
                
                    
                        <div class="mb-3">
                            <label class="form-label" for="experience_year">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="email" name="email" />
                            @error('email')
                                <span style="color: red">{{ $message }}</span>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="experience_year">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="password" name="password" />
                            @error('password')
                                <span style="color: red">{{ $message }}</span>
                            @enderror
                        </div>
                    
                        
                    
                        <button type="submit" class="btn btn-primary">Add user</button>
                    </form>
                    
                </div>
              </div>
            </div>
        
          </div>
        </div>
    @endsection