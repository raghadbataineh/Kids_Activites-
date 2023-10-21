@extends('Admin.layout.master')
@section('title', 'Admin-Event')

@section('content')
    <div class="content-wrapper">

        <!-- Content -->

        <div class="container-xxl flex-grow-1 container-p-y">


            
              

            <div class="app-ecommerce-category over">
                <!-- Category List Table -->
                @include('sweetalert::alert')
                <div class="card">
                    <div style="text-align: center;">
                        <h3 style="margin-top: 30px; ">Events</h3>
                        <br>
                    </div>  
                    
                    <a href="{{ url('/event/create') }}" style="margin-left: 20px"><button class=" btn btn-primary" tabindex="0" type="button"><span><i
                                    class="mdi mdi-plus me-0 me-sm-1"></i><span class="d-none d-sm-inline-block">Add
                                    Event</span></span></button></a>
                                    <br>
                    <div class="card-datatable table-responsive">
                        <table class=" table">
                            <thead class="table-light">
                                <tr>
                                    <th class="text-nowrap col-lg-3">Events</th>
                                    <th class="text-nowrap col-lg-3 ">short_description </th>
                                    <th class="text-nowrap ">Date </th>
                                    <th class="text-nowrap ">Location </th>
                                    <th class="text-nowrap ">price </th>
                                    <th class="text-nowrap ">status </th>
                                </tr>


                            </thead>
                            <tbody class="table-border-bottom-0">
                                @foreach ($event as $item)
                                    <tr>
                                        <td><img src="{{ $item->image }}" alt=""class=" h-auto" style="width:73px">
                                            <span>{{ $item->name }} </span>
                                        </td>

                                        <td>
                                            {{ $item->short_description }}
                                        </td>

                                        <td>
                                            {{ $item->date }}
                                        </td>

                                        <td>
                                            {{ $item->location }}
                                        </td>
                                        <td>
                                            {{ $item->price }}JOD
                                        </td>


                                        @if ($item->status == 'pending')
                                            <td><span class="badge bg-label-primary me-1">PENDING</span></td>
                                        @else
                                            <td><span class="badge bg-label-success me-1">ACTIVE</span></td>
                                        @endif

                                        <td>
                                            <div class="dropdown">
                                                <button type="button" class="btn p-0 dropdown-toggle hide-arrow"
                                                    data-bs-toggle="dropdown">
                                                    <i class="mdi mdi-dots-vertical"></i>
                                                </button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item"
                                                        href="{{ route('orderdetails', ['id' => $item->id]) }}"><i
                                                            class="mdi mdi-eye me-1"></i>
                                                        View Details</a>
                                                    <a class="dropdown-item"
                                                        href="{{ url('/event/' . $item->id . '/edit') }}"><i
                                                            class="mdi mdi-pen me-1"></i>
                                                        Edit</a>
                                                    <form method="POST" onclick="confirmation(event)"
                                                        action="{{ url('/event/' . $item->id) }}">
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
                <!-- Offcanvas to add new customer -->
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasEcommerceCategoryList"
                    aria-labelledby="offcanvasEcommerceCategoryListLabel">

                </div>
            </div>

        </div>
        <!-- / Content -->
    @endsection
