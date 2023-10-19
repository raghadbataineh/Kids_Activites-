@extends('Admin.layout.master')
@section('title', 'Admin-order')

@section('content')
    <div class="content-wrapper">
        <!-- Content -->

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
                            @foreach ($orgnizers as $orgnizer)
                            <tr>
                                <td>#{{ $orgnizer->id }}</td>
                                <td>{{ $orgnizer->name }}</td>
                                <td><img src="{{ url('/images/' . $orgnizer->image) }}" alt="{{ $orgnizer->name }}" width="100px" height="100px"></td>

                                <td>{{ $orgnizer->role }}</td>
                                <td>{{ $orgnizer->experience_year }}</td>
                                <td>{{ $orgnizer->email }}</td>
                                <td>
                                    <a href="{{ route('orgnizer.edit', $orgnizer->id) }}" class="btn btn-primary">
                                        Edit
                                    </a>
                                    <a href="{{ route('orgnizer.show', $orgnizer->id) }}" class="btn btn-info">
                                        View Details
                                    </a>
                                    <!-- You can add more actions here as needed -->
                                </td>
                            </tr>
                        @endforeach


                        </tbody>
                    </table>
                </div>
            </div>

        @endsection
