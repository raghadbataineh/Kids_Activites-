@extends('Admin.layout.master')
@section('title', 'Reviews')

@section('content')
<div class="content-wrapper">
    <br>
    <div class="card">
        <div style="text-align: center;">
          <h3 style="margin-top: 30px; ">Reviews</h3>
      </div> 
    <div class="container-xxl flex-grow-1 container-p-y">
        <div class="app-ecommerce-category over">
            <!-- Category List Table -->
            @include('sweetalert::alert')
            <div class="card">
                <div class=" table-responsive" style="text-align: center;">
                    <table class=" table">
                        <thead class="table-light">
                            <tr>
                                <th class="text-nowrap col-lg-3">User Name</th>
                                <th class="text-nowrap col-lg-6">Comment</th>
                                <th class="text-nowrap col-lg-3">Category Name</th>
                                
                            </tr>
                        </thead>
                        <tbody class="table-border-bottom-0">
                            @foreach ($review as $item)
                            <tr>
                                <tr>
                                    <td><img src="{{ $item->user->image }}" alt="" style="width: 75px; height: 75px;">
                                      
                                      <span> &nbsp {{ $item->user->first_name }} {{ $item->user->last_name }} </span>
                                   </td>
                                   <td>{!! preg_replace('/<img(.*?)>/', '<img$1 width="90" height="90" style="margin: 10px;">', $item->comment) !!}</td>

                            </td>
                                <td>{{ $item->category->name }}</td>
                                <td>
                                    <div class="dropdown">
                                        <button type="button" class="btn p-0 dropdown-toggle hide-arrow"
                                            data-bs-toggle="dropdown">
                                            <i class="mdi mdi-dots-vertical"></i>
                                        </button>
                                        <div class="dropdown-menu">
                                            <form method="POST" onclick="confirmation(event)"
                                                action="{{ url('/review/' . $item->id) }}">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="dropdown-item"><i
                                                        class="mdi mdi-trash-can me-1"></i>Delete</button>
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
        </div>
    </div>
</div>
@endsection
