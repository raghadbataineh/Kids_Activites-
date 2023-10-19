@extends('Admin.layout.master')
@section('title', 'Admin-OrderDetail')

@section('content')
    <div class="content-wrapper">
        <!-- Content -->

        <div class="container-xxl flex-grow-1 container-p-y">

            <div
                class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">

                <div class="d-flex flex-column justify-content-center">
                    <div class="d-flex">
                        @foreach ($event as $item)
                            @if ($item->status == 'active')
                                <span class="badge bg-label-success me-1">Active</span>
                            @endif
                            @if ($item->status == 'pending')
                                <span class="badge bg-label-warning me-1">Pending</span>
                            @endif


                    </div>
                    <p class="mt-1 mb-0">{{ $item->date }} </p>
                    <p class="mt-1 mb-0">{{ $item->start_time }}-{{ $item->end_time }} </p>
                @break
                @endforeach
            </div>

        </div>

        <!-- Order Details Table -->

        <div class="row">
            <div class="col-12 col-lg-12">
                <div class="card mb-4">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="card-title m-0">Event details</h5>
                        <h6 class="m-0"><a href="{{ url('/event/' . $item->id . '/edit') }}">Edit</a></h6>
                    </div>
                    <div class="card-datatable table-responsive">
                        <table class="datatables-order-details table">
                            <thead>
                                <tr>

                                    <th class="col-lg-3">Events</th>
                                    <th class=" col-lg-3">Long Description</th>
                                    <th class="col-lg-3">time</th>
                                    <th  class="col-lg-3">Category</th>


                                </tr>
                            </thead>
                            <tbody>

                                @foreach ($event as $item)
                                    <tr>

                                        <td><img src="{{ $item->image2 }}" alt=""class=" h-auto "
                                                style="width: 73px">
                                            <span>{{ $item->name }} </span>
                                        </td>
                                        <td>{{ $item->long_description }} </td>
                                        <td>{{ \Carbon\Carbon::parse($item->start_time)->format('H:i') }} - {{ \Carbon\Carbon::parse($item->end_time)->format('H:i') }}</td>

                                       
                                        <td>{{ $item->category->name }}</td>

                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
          
                    </div>
                </div>
                {{-- <div class="card mb-4">
                    <div class="card-header">
                        <h5 class="card-title m-0">Shipping activity</h5>
                    </div>
                    <div class="card-body mt-3">
                        <ul class="timeline pb-0 mb-0">
                            <li class="timeline-item timeline-item-transparent border-primary">
                                <span class="timeline-point timeline-point-primary"></span>
                                <div class="timeline-event">
                                    <div class="timeline-header">
                                        <h6 class="mb-0">Order was placed (Order ID: #1)</h6>
                                        <span class="text-muted">Tuesday 11:29 AM</span>
                                    </div>
                                    <p class="mt-2">Your order has been placed successfully</p>
                                </div>
                            </li>
                            <li class="timeline-item timeline-item-transparent border-primary">
                                <span class="timeline-point timeline-point-primary"></span>
                                <div class="timeline-event">
                                    <div class="timeline-header">
                                        <h6 class="mb-0">Pick-up</h6>
                                        <span class="text-muted">Wednesday 11:29 AM</span>
                                    </div>
                                    <p class="mt-2">Pick-up scheduled with courier</p>
                                </div>
                            </li>
                            <li class="timeline-item timeline-item-transparent border-primary">
                                <span class="timeline-point timeline-point-primary"></span>
                                <div class="timeline-event">
                                    <div class="timeline-header">
                                        <h6 class="mb-0">Dispatched</h6>
                                        <span class="text-muted">Thursday 11:29 AM</span>
                                    </div>
                                    <p class="mt-2">Item has been picked up by courier</p>
                                </div>
                            </li>
                            <li class="timeline-item timeline-item-transparent border-primary">
                                <span class="timeline-point timeline-point-primary"></span>
                                <div class="timeline-event">
                                    <div class="timeline-header">
                                        <h6 class="mb-0">Package arrived</h6>
                                        <span class="text-muted">Saturday 15:20 AM</span>
                                    </div>
                                    <p class="mt-2">Package arrived at an Amazon facility, NY</p>
                                </div>
                            </li>
                            <li class="timeline-item timeline-item-transparent">
                                <span class="timeline-point timeline-point-primary"></span>
                                <div class="timeline-event">
                                    <div class="timeline-header">
                                        <h6 class="mb-0">Dispatched for delivery</h6>
                                        <span class="text-muted">Today 14:12 PM</span>
                                    </div>
                                    <p class="mt-2">Package has left an Amazon facility, NY</p>
                                </div>
                            </li>
                            <li class="timeline-item timeline-item-transparent border-transparent pb-0">
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

            <div class="col-12 col-lg-6">
                <div class="card mb-4">
                    <div class="card-body">
                        <h6 class="card-title mb-4">Organizer details</h6>
                        <div class="d-flex justify-content-start align-items-center mb-4">
                            <div class="avatar me-2 pe-1">
                                @foreach ($event as $item)
                                    <img src="{{ $item->organizer->image }}" alt="Avatar" class="rounded-circle">
                                @break
                            @endforeach
                        </div>
                        <div class="d-flex flex-column">
                            @foreach ($event as $item)
                                <a href="#">


                                    <h6 class="mb-1">{{ $item->organizer->name }} </h6>
                                    <h6 class="mb-1">{{ $item->organizer->role }} </h6>

                                </a>

                                <small>Organizer ID: #{{ $item->organizer->id }} </small>
                            @break
                        @endforeach
                    </div>
                </div>
                <div class="d-flex justify-content-start align-items-center mb-4">



                </div>
                <div class="d-flex justify-content-between">
                    <h6 class="mb-2">Contact info</h6>
                </div>
                @foreach ($event as $item)
                    <a href="{{ $item->organizer->facebook }} " class=" mb-1"><i class="menu-icon tf-icons  mdi mdi-facebook"></i> </a>
                    <a href="{{ $item->organizer->instagram }} " class=" mb-1"><i class="menu-icon tf-icons  mdi mdi-instagram"></i> </a>
                    <p class=" mb-0">Mobile: (+962){{ $item->organizer->phone }} </p>
                    @break
                    @endforeach
            </div>
        </div>


</div>
</div>
</div>




</div>
<!-- / Content -->

</div>

@endsection
