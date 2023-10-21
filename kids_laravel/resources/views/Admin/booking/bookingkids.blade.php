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

                    <div class="card mb-4">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="card-title m-0">Notes</h5>
                    <h6 class="m-0"><a href="{{ route('booking.index') }}">Back</a></h6>

                    </div>
                    <div class="card-datatable table-responsive">
                        <table class="datatables-order-details table">
                            <thead>
                                <tr>
                                    <th class=" col-lg-3">phone</th>
                                    <th class="col-lg-3">Address</th>
                                    <th  class="col-lg-3">payment_method</th>
                                    <th  class="col-lg-3">Total_price</th>
                                    <th class="col-lg-3">Notes</th>
                                </tr>
                            </thead>
                            <tbody>

                    
                                    <tr>
                                        <td>{{ $Booking->phone }} </td>                                       
                                        <td>{{ $Booking->address }}</td>
                                        <td>{{ $Booking->payment_method }}</td>
                                        <td>{{ $Booking->Total_price }}</td>
                                        <td>{{ $Booking->notes }}</td>
                                    </tr>
                    
                            </tbody>
                        </table>
          
                    </div>
                </div>
                    <div class="card-datatable table-responsive">
                        <table class=" table">
                            <thead class="table-light">
                                <tr>
                                    <th class="text-nowrap col-lg-3">Name</th>
                                    <th class="text-nowrap col-lg-3 ">age</th>
                                </tr>
                            </thead>
                            <tbody class="table-border-bottom-0">
                                @foreach ($bookingKids  as $item)
                                    <tr>
                                        <td>
                                            {{ $item->name }}
                                        </td>

                                        <td>
                                            {{ $item->age }}
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
