@extends('Admin.layout.master')
@section('title', 'Admin-OrderDetail')

@section('content')
    <div class="content-wrapper">
        <!-- Content -->

        <div class="container-xxl flex-grow-1 container-p-y">

            <div
                class="d-flex flex-column flex-md-row justify-content-between align-orgnizers-start align-orgnizers-md-center mb-4 gap-3">


        <!-- Order Details Table -->

        <div class="row">
            <div class="col-12 col-lg-8">
                <div class="card mb-4">
                    <div class="card-header d-flex justify-content-between align-orgnizers-center">
                        <h5 class="card-title m-0">Organizer details</h5>
                        <h6 class="m-0"><a href=" javascript:void(0)">Edit</a></h6>
                    </div>
                    <div class="card-datatable table-responsive">
                        <table class="datatables-order-details table">
                            <thead>
                                <tr>

                                    <th class="w-50">Orgnizer</th>
                                    <th class="w-50">Name</th>
                                    <th>Role</th>
                                    <th>Experience year</th>
                                    {{-- <th>total</th> --}}
                                </tr>
                            </thead>
                            <tbody>
                               
                                    <tr>

                                        <td><img src="{{ url('/images/' . $orgnizer->image) }}" alt="{{ $orgnizer->name }}" width="100px" height="80px">
                                        </td>
                                        <td> {{ $orgnizer->name }} </td>
                                        <td>{{ $orgnizer->role }} </td>
                                        <td>{{ $orgnizer->experience_year }} </td>
                                        
                                    </tr>

                                  
                            </tbody>
                        </table>
                        <div class="d-flex justify-content-end align-orgnizers-center m-3 p-1">
                            <div class="order-calculations">
                                <div class="d-flex justify-content-between mb-2">
                                    <span class="w-px-100 text-heading">Number:</span>
                                </div>
                                <div class="d-flex justify-content-between mb-2">
                                    <span class="w-px-100 text-heading">Events:</span>
                                    <h6 class="mb-0">5</h6>
                                </div>
                              
                             
                            </div>
                        </div>
                    </div>
                </div>
                {{-- Event details that organizer give --}}
                {{-- <div class="card mb-4">
                    <div class="card-header">
                        <h5 class="card-title m-0">Events activity</h5>
                    </div>
                    <div class="card-body mt-3">
                        <ul class="timeline pb-0 mb-0">
                            <li class="timeline-orgnizer timeline-orgnizer-transparent border-primary">
                                <span class="timeline-point timeline-point-primary"></span>
                                <div class="timeline-event">
                                    <div class="timeline-header">
                                        <h6 class="mb-0">Order was placed (Order ID: #1)</h6>
                                        <span class="text-muted">Tuesday 11:29 AM</span>
                                    </div>
                                    <p class="mt-2">Your order has been placed successfully</p>
                                </div>
                            </li>
                            <li class="timeline-orgnizer timeline-orgnizer-transparent border-primary">
                                <span class="timeline-point timeline-point-primary"></span>
                                <div class="timeline-event">
                                    <div class="timeline-header">
                                        <h6 class="mb-0">Pick-up</h6>
                                        <span class="text-muted">Wednesday 11:29 AM</span>
                                    </div>
                                    <p class="mt-2">Pick-up scheduled with courier</p>
                                </div>
                            </li>
                            <li class="timeline-orgnizer timeline-orgnizer-transparent border-primary">
                                <span class="timeline-point timeline-point-primary"></span>
                                <div class="timeline-event">
                                    <div class="timeline-header">
                                        <h6 class="mb-0">Dispatched</h6>
                                        <span class="text-muted">Thursday 11:29 AM</span>
                                    </div>
                                    <p class="mt-2">orgnizer has been picked up by courier</p>
                                </div>
                            </li>
                            <li class="timeline-orgnizer timeline-orgnizer-transparent border-primary">
                                <span class="timeline-point timeline-point-primary"></span>
                                <div class="timeline-event">
                                    <div class="timeline-header">
                                        <h6 class="mb-0">Package arrived</h6>
                                        <span class="text-muted">Saturday 15:20 AM</span>
                                    </div>
                                    <p class="mt-2">Package arrived at an Amazon facility, NY</p>
                                </div>
                            </li>
                            <li class="timeline-orgnizer timeline-orgnizer-transparent">
                                <span class="timeline-point timeline-point-primary"></span>
                                <div class="timeline-event">
                                    <div class="timeline-header">
                                        <h6 class="mb-0">Dispatched for delivery</h6>
                                        <span class="text-muted">Today 14:12 PM</span>
                                    </div>
                                    <p class="mt-2">Package has left an Amazon facility, NY</p>
                                </div>
                            </li>
                            <li class="timeline-orgnizer timeline-orgnizer-transparent border-transparent pb-0">
                                <span class="timeline-point timeline-point-secondary"></span>
                                <div class="timeline-event pb-0">
                                    <div class="timeline-header">
                                        <h6 class="mb-0">Delivery</h6>
                                    </div>
                                    <p class="mt-2 mb-0">Package will be delivered by tomorrow</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div> --}}
            </div>

            <div class="col-12 col-lg-4">
                <div class="card mb-4">
                    <div class="card-body">
                        <h6 class="card-title mb-4">Orgnizer details</h6>
                        <div class="d-flex justify-content-start align-orgnizers-center mb-4">
                            <div class="avatar me-2 pe-1">
                                    {{-- <img src="{{ $orgnizer->image }}" alt="Avatar" class="rounded-circle"> --}}
                                    <img src="{{ url('/images/' . $orgnizer->image) }}" alt="{{ $orgnizer->name }}" class="rounded-circle">
                        </div>
                        <div class="d-flex flex-column">
                                <a href="app-user-view-account.html">


                                    <h6 class="mb-1">{{ $orgnizer->name }} </h6>

                                </a>

                                {{-- <small>Customer ID: #{{ $orgnizer->user->id }} </small> --}}
                    </div>
                </div>
                <div class="d-flex justify-content-start align-orgnizers-center mb-4">



                </div>
                <div class="d-flex justify-content-between">
                    <h6 class="mb-2">Contact info</h6>
                </div>
                    <p class=" mb-1">Email:{{ $orgnizer->email }} </p>
                    <p class=" mb-0">Mobile: (+962){{ $orgnizer->phone }} </p>

            </div>
        </div>

        <div class="card mb-4">

            <div class="card-header d-flex justify-content-between">
                <h6 class="card-title m-0">Social Media Contact</h6>

            </div>
            <div class="card-body">
                <p class="mb-0">{{ $orgnizer->facebook }} </p>
                <a href={{ $orgnizer->facebook }}>
                    <i class="mdi mdi-facebook"></i>
                  </a>
                <p class="mb-0">{{ $orgnizer->instagram }} </p>
                <a href={{ $orgnizer->instagram }}>
                    <i class="mdi mdi-instagram"></i>
                  </a>
            </div>
    </div>
    <div class="card mb-4">

        <div class="card-header d-flex justify-content-between">
            <h6 class="card-title m-0">Comment</h6>

        </div>
        <div class="card-body">
            {{-- <p class="mb-0">{{ $orgnizer->order->comment }} </p> --}}
        </div>
 
</div>
</div>
</div>




</div>
<!-- / Content -->

</div>

@endsection
