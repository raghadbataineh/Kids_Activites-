@extends('Admin.layout.master')
@section('title', 'Admin-order')

@section('content')
    <div class="content-wrapper">
        <!-- Content -->
        {{-- <a href="{{ route('orgnizer.create') }}" class="btn btn-info" style="width: 150px">
            Add Orgnizer
        </a> --}}
        <div style="text-align: center;">
            <h3 style="margin-top: 30px; ">Organizers of Events</h3>
            <br>
        </div>  
        
        
        
        <a href="{{ route('orgnizer.create') }}" style="margin-left: 20px"><button class=" btn btn-primary" tabindex="0" type="button"><span><i
            class="mdi mdi-plus me-0 me-sm-1"></i><span class="d-none d-sm-inline-block">Add
            Organizer</span></span></button></a>
            <br>
        <div class="container-xxl flex-grow-1 container-p-y">


            <!-- Basic Bootstrap Table -->
            <div class="card">
          
                <div class="table-responsive text-nowrap">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Role</th>
                                <th>Experience (Years)</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody class="table-border-bottom-0">
                            <?php 
                             $i=1;
                                ?>
                            @foreach ($orgnizers as $orgnizer)
                            <tr>
                                <td>#{{ $i }}</td>
                                <td>{{ $orgnizer->name }}</td>
                                <td><img src="{{ $orgnizer->image }}" width="100px" height="80px"></td>

                                <td>{{ $orgnizer->role }}</td>
                                <td style="text-align: center">{{ $orgnizer->experience_year }}</td>
                                <td><a href="mailto:{{ $orgnizer->email }}">{{ $orgnizer->email  }}</a>

                                {{-- <td>
                                    <a href="{{ route('orgnizer.edit', $orgnizer->id) }}" class="btn btn-primary">
                                        Edit
                                    </a>
                                    <a href="{{ route('orgnizer.show', $orgnizer->id) }}" class="btn btn-info">
                                        View Details
                                    </a>
                                    <a href="{{ route('orgnizer.show', $orgnizer->id) }}" class="btn btn-danger">
                                        Delete
                                    </a>
                                </td> --}}
                                <td>
                                    <div class="dropdown">
                                        <button type="button" class="btn p-0 dropdown-toggle hide-arrow"
                                            data-bs-toggle="dropdown">
                                            <i class="mdi mdi-dots-vertical"></i>
                                        </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item"
                                                href="{{ route('orgnizer.show', $orgnizer->id) }}"><i
                                                    class="mdi mdi-eye me-1"></i>
                                                View Details</a>
                                            <a class="dropdown-item"
                                                href="{{ route('orgnizer.edit', $orgnizer->id) }}"><i
                                                    class="mdi mdi-pen me-1"></i>
                                                Edit</a>
                                            <form method="POST" onclick="confirmation(event)"
                                                action="{{ route('orgnizer.destroy', $orgnizer->id) }}">
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
                            <?php 
                                $i++;
                                ?>
                        @endforeach


                        </tbody>
                    </table>
                </div>
            </div>

        @endsection
