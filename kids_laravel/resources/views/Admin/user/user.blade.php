@extends('Admin.layout.master')
@section('title', 'Admin-order')

@section('content')
    <div class="content-wrapper">
        <!-- Content -->

        <div style="text-align: center;">
            <h3 style="margin-top: 30px; ">Users</h3>
            <br>
        </div>  
        
        
        
        
        <a href="{{ url('/users/create') }}" style="margin-left: 20px"><button class=" btn btn-primary" tabindex="0" type="button"><span><i
            class="mdi mdi-plus me-0 me-sm-1"></i><span class="d-none d-sm-inline-block">Add
            users</span></span></button></a>
            <br>
        

        <div class="container-xxl flex-grow-1 container-p-y">


            <!-- Basic Bootstrap Table -->
            <div class="card">
          
                <div class="table-responsive text-nowrap">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody class="table-border-bottom-0">
                            
                            @foreach ($users as $user)
                            <tr>
                                <td>#{{ $user->id }}</td>
                                <td>{{$user->first_name }}</td>
                                {{-- <td><img src="{{ url('/images/' . $orgnizer->image) }}" alt="{{ $orgnizer->name }}" width="100px" height="80px"></td> --}}

                                <td>{{$user->last_name}}</td>
                                <td>{{$user->email}}</td>
                                {{-- <td style="text-align: center">{{ $orgnizer->experience_year }}</td> --}}
                                {{-- <td><a href="mailto:{{ $orgnizer->email }}">{{ $orgnizer->email  }}</a> --}}

                                    <td>
                                        <div class="dropdown">
                                            <button type="button" class="btn p-0 dropdown-toggle hide-arrow"
                                                data-bs-toggle="dropdown">
                                                <i class="mdi mdi-dots-vertical"></i>
                                            </button>
                                            <div class="dropdown-menu">
                                              
                                                <form method="POST" onclick="confirmation(event)"
                                                    action=" {{route('users.destroy',$user->id)}}">
                                                   
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="dropdown-item"><i
                                                            class="mdi mdi-trash-can me-1"></i>
                                                        Delete</button>
                                                </form>
                                            </div>
                                        </div>
                                    </td>
                            </tr>
                           
                        @endforeach


                        </tbody>
                    </table>
                </div>
            </div>

        @endsection
