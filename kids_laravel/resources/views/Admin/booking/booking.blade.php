@extends('Admin.layout.master')
@section('title', 'Admin-booking')

@section('content')
    <div class="content-wrapper">

        <!-- Content -->

        <div class="container-xxl flex-grow-1 container-p-y">
            <div class="app-ecommerce-category over">
                <!-- Category List Table -->
                @include('sweetalert::alert')
                <div class="card">
                    {{-- <a href="{{ url('/event/create') }}"><button class=" btn btn-primary" tabindex="0" type="button"><span><i
                                    class="mdi mdi-plus me-0 me-sm-1"></i><span class="d-none d-sm-inline-block">Add
                                    Event</span></span></button></a> --}}
                    <div class="card-datatable table-responsive">
                        <table class=" table">
                            <thead class="table-light">
                                <tr>
                                    <th class="text-nowrap col-lg-3">Event_Name</th>
                                    <th class="text-nowrap col-lg-3 ">User_Name</th>
                                    <th class="text-nowrap ">Price</th>
                                    <th class="text-nowrap ">Kids</th>
                                    <th class="text-nowrap ">...</th>
                                </tr>
                            </thead>
                            <tbody class="table-border-bottom-0">
                                @foreach ($booking as $item)
                                    <tr>
                                        <td>
                                            {{ $item->event->name }}
                                        </td>

                                        <td>
                                            {{ $item->user->first_name }}
                                        </td>

                                        <td>
                                            {{ $item->Total_price }}
                                        </td>
                                        <td>
                                            {{ $item->kidsNum }}
                                        </td>
                                        <td>
                                            <div class="dropdown">
                                                <button type="button" class="btn p-0 dropdown-toggle hide-arrow"
                                                    data-bs-toggle="dropdown">
                                                    <i class="mdi mdi-dots-vertical"></i>
                                                </button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item"
                                                        href="{{ route('booking.show', ['booking' => $item->id]) }}"><i
                                                            class="mdi mdi-eye me-1"></i>
                                                        View Details</a>
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
