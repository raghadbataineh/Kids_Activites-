@extends('Admin.layout.master')
@section('title', 'Admin-EditEvent')

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
                            <form action="{{ url('event/' . $event->id) }}" method="POST" enctype="multipart/form-data">
                                @csrf
                                @method('PATCH')
                                <div class="mb-3">
                                    <label class="form-label" for="name">Event Name</label>
                                    <input type="text" class="form-control" id="name"
                                        placeholder="Kids Drawing Event" name='name' value={{$event->name}} />
                                    @error('name')
                                        <span style="color: red"> {{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="price">Price</label>
                                    <input type="text" class="form-control" id="price"
                                        placeholder="15" name='price' value={{$event->price}} />
                                    @error('price')
                                        <span style="color: red"> {{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="long">Long Description</label>
                                    <input type="text" class="form-control" id="long" placeholder="..."
                                        name='long' value={{$event->long_description}}/>
                                    @error('long')
                                        <span style="color: red"> {{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="short">Short Description</label>
                                    <input type="text" class="form-control" id="short" placeholder="..."
                                        name='short' value={{$event->short_description}} />
                                    @error('short')
                                        <span style="color: red"> {{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="location">Location</label>
                                    <input type="text" class="form-control" id="location" placeholder="Amman"
                                        name='location' value={{$event->location}}/>
                                    @error('location')
                                        <span style="color: red"> {{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="date">Date</label>
                                    <input type="date" class="form-control" id="date" placeholder="..."
                                        name='date' value={{$event->date}} />
                                    @error('date')
                                        <span style="color: red"> {{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="start">Start Time</label>
                                    <input type="time" class="form-control" id="start" placeholder="..."
                                        name='start' value={{$event->start_time}} />
                                    @error('start')
                                        <span style="color: red"> {{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="end">End Time</label>
                                    <input type="time" class="form-control" id="end" placeholder="..."
                                        name='end' value={{$event->end_time}} />
                                    @error('end')
                                        <span style="color: red"> {{ $message }}</span>
                                    @enderror
                                </div>

                                <div class="mb-3">
                                    <label for="store" class="form-label">category</label>
                                    <select class="form-select" id="category" aria-label="Default select example" name="category">
                                        @foreach ($category as $item)
                                            <option value="{{ $item->id }}" {{ $item->id ==$event->category_id ? 'selected' : '' }}>
                                                {{ $item->name }}
                                            </option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="store" class="form-label">Organizer</label>
                                    <select class="form-select" id="organizer" aria-label="Default select example"
                                        name="organizer">
                                        @foreach ($organizer as $item)
                                            <option value="{{ $item->id }}" {{ $item->id ==$event->organize_id ? 'selected' : '' }}>{{ $item->name }} </option>
                                        @endforeach
                                    </select>
                                </div>
                                </span><br>
                                <div class="mb-3">
                                    <label class="form-label" for="image">Image</label>
                                    <input type="file" class="form-control" id="image" placeholder="..."
                                        name='image' value={{$event->image}} />
                                    @error('image')
                                        <span style="color: red"> {{ $message }}</span>
                                    @enderror
                                </div>

                                @error('image')
                                    <span style="color: red">{{ $message }}</span>
                                @enderror
                                </span><br>
                                <div class="mb-3">
                                    <label class="form-label" for="image2">Image2</label>
                                    <input type="file" class="form-control" id="image2" placeholder="..."
                                        name='image2' value={{$event->image2}}  />
                                    @error('image2')
                                        <span style="color: red"> {{ $message }}</span>
                                    @enderror
                                </div>
                                @error('image2')
                                    <span style="color: red">{{ $message }}</span>
                                @enderror
                                </span><br>
                                <div class="mb-4">
                                    <label for="status" class="form-label">Status</label>
                                    <select class="form-select" id="status" aria-label="Default select example"
                                        name="status">
                                        <option value="active">ACTIVE</option>
                                        <option value="pending">PENDING</option>
                                    </select>
                                </div>
                                <button type="submit" class="btn btn-primary">Add Event</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    @endsection
