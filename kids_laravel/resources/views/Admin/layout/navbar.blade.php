<!DOCTYPE html>

<html lang="en" class="light-style layout-navbar-fixed layout-menu-fixed layout-compact " dir="ltr"
    data-theme="theme-default" data-assets-path="assets/" data-template="vertical-menu-template">

<head>
    <meta charset="utf-8" />
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />

    <title>@yield('title')</title>


    <meta name="description" content="Start your development with a Dashboard for Bootstrap 5" />
    <meta name="keywords"
        content="dashboard, material, material design, bootstrap 5 dashboard, bootstrap 5 design, bootstrap 5">
    <!-- Canonical SEO -->
    <link rel="canonical" href="https://themeselection.com/item/materio-bootstrap-html-admin-template/">

    {{-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> --}}
    <!-- ? PROD Only: Google Tag Manager (Default ThemeSelection: GTM-5DDHKGP, PixInvent: GTM-5J3LMKC) -->
    <script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                '../../../../www.googletagmanager.com/gtm5445.html?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-5DDHKGP');
    </script>
    <!-- End Google Tag Manager -->

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="logooo.jpg" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;ampdisplay=swap"
        rel="stylesheet">

    <!-- Icons -->
    <link rel="stylesheet" href="{{ asset('Admin/assets/vendor/fonts/materialdesignicons.css') }}" />
    <link rel="stylesheet" href="{{ asset('Admin/assets/vendor/fonts/flag-icons.css') }}" />

    <!-- Menu waves for no-customizer fix -->
    <link rel="stylesheet" href="{{ asset('Admin/assets/vendor/libs/node-waves/node-waves.css') }}" />
    <script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                '../../../../www.googletagmanager.com/gtm5445.html?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-5DDHKGP');
    </script>
    <!-- End Google Tag Manager -->

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="../../images/web.png" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;ampdisplay=swap"
        rel="stylesheet">

    <link rel="stylesheet" href="{{ asset('Admin/assets/vendor/css/rtl/core.css') }}"
        class="template-customizer-core-css" />
    <link rel="stylesheet" href="{{ asset('Admin/assets/vendor/css/rtl/theme-default.css') }}"
        class="template-customizer-theme-css" />
    <link rel="stylesheet" href="{{ asset('Admin/assets/css/demo.css') }}" />

    <!-- Vendors CSS -->
    <link rel="stylesheet" href="{{ asset('Admin/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css') }}" />
    <link rel="stylesheet" href="{{ asset('Admin/assets/vendor/libs/typeahead-js/typeahead.css') }}" />
    <link rel="stylesheet" href="{{ asset('Admin/assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css') }}">
    <link rel="stylesheet"
        href="{{ asset('Admin/assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css') }}">
    <link rel="stylesheet"
        href="{{ asset('Admin/assets/vendor/libs/datatables-buttons-bs5/buttons.bootstrap5.css') }}">
    <link rel="stylesheet"
        href="{{ asset('Admin/assets/vendor/libs/datatables-checkboxes-jquery/datatables.checkboxes.css') }}">
    <link rel="stylesheet" href="{{ asset('Admin/assets/vendor/libs/select2/select2.css') }}">
    <link rel="stylesheet" href="{{ asset('Admin/assets/vendor/libs/%40form-validation/umd/styles/index.min.css') }}">
    <link rel="stylesheet" href="{{ asset('Admin/assets/vendor/libs/quill/typography.css') }}">
    <link rel="stylesheet" href="{{ asset('Admin/assets/vendor/libs/quill/katex.css') }}">
    <link rel="stylesheet" href="{{ asset('Admin/assets/vendor/libs/quill/editor.css') }}">

    <link rel="stylesheet" href="{{ asset('Admin/assets/vendor/libs/dropzone/dropzone.css') }}">
    <link rel="stylesheet" href="{{ asset('Admin/assets/vendor/libs/flatpickr/flatpickr.css') }}">
    <link rel="stylesheet" href="{{ asset('Admin/assets/vendor/libs/tagify/tagify.css') }}" />
    <!-- Page CSS -->

    <link rel="stylesheet" href="{{ asset('Admin/assets/vendor/css/pages/app-ecommerce.css') }}">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"
        integrity="sha512-AA1Bzp5Q0K1KanKKmvN/4d3IRKVlv9PYgwFPvm32nPO6QS8yH1HO7LbgB1pgiOxPtfeg5zEn2ba64MUcqJx6CA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <!-- Helpers -->
    <script src="{{ asset('Admin/assets/vendor/js/helpers.js') }}"></script>
    <!--! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section -->
    <!--? Template customizer: To hide customizer set displayCustomizer value false in config.js.  -->
    <script src="{{ asset('Admin/assets/vendor/js/template-customizer.js') }}"></script>
    <!--? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  -->
    <script src="{{ asset('Admin/assets/js/config.js') }}"></script>
    <style>
        .switch {
            position: relative;
            display: inline-block;
            width: 40px;
            height: 25px;
        }

        .narrow-column {
            white-space: nowrap;
            max-width: 200px;
            /* You can adjust this value based on your requirements */
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            -webkit-transition: .4s;
            transition: .4s;
        }

        .slider:before {
            position: absolute;
            content: "";
            height: 15px;
            width: 15px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;
        }

        input:checked+.slider {
            background-color: #fe4b7b;
        }

        input:focus+.slider {
            box-shadow: 0 0 1px #fe4b7b;
        }

        input:checked+.slider:before {
            -webkit-transform: translateX(15px);
            -ms-transform: translateX(15px);
            transform: translateX(15px);
        }

        /* Rounded sliders */
        .slider.round {
            border-radius: 34px;
        }

        .slider.round:before {
            border-radius: 50%;
        }

        .form-select {
            border: 1px solid gray;
        }
    </style>
    <link rel="stylesheet" href="//cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css">
    {{-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"> --}}
</head>

<body>

    <!-- ?PROD Only: Google Tag Manager (noscript) (Default ThemeSelection: GTM-5DDHKGP, PixInvent: GTM-5J3LMKC) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5DDHKGP" height="0" width="0"
            style="display: none; visibility: hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <!-- Layout wrapper -->
    <div class="layout-wrapper layout-content-navbar  ">
        <div class="layout-container">

            <!-- Menu -->

            <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">

                <img src="{{ asset('logooo.jpg') }}" alt=""
                    style="width: 180px; margin-top:25px; margin-left:30px">

                <div class="menu-inner-shadow"></div>

                <ul class="menu-inner py-1">
                    <!-- Dashboard -->
                    <br>
                    <br>
                    <li class="menu-item {{ request()->is('index') ? 'active' : '' }}">
                        <a href="{{ route('index') }}" class="menu-link">
                            <i class="menu-icon tf-icons mdi mdi-home-circle"></i>
                            <div>Dashboard</div>
                        </a>
                    </li>
                    <li class="menu-item menu-parent">
                        <a href="javascript:void(0)" class="menu-link menu-toggle">
                            <i class="menu-icon tf-icons  mdi mdi-shape"></i>
                            <div>Category</div>
                        </a>
                        <ul class="menu-sub ">
                            <li class="menu-item {{ request()->is('category') ? 'active' : '' }}">
                                <a href="{{ asset('/category') }}" class="menu-link">
                                    <div>Category list</div>
                                </a>
                            </li>
                            <li class="menu-item  {{ request()->is('addcategory') ? 'active' : '' }}">
                                <a href="" class="menu-link">
                                    <div>Add Category</div>
                                </a>
                            </li>
                        </ul>
                    </li>



                    <li class="menu-item menu-parent">
                        <a href="javascript:void(0)" class="menu-link menu-toggle">
                            <i class="menu-icon tf-icons mdi mdi-calendar-heart"></i>
                            <div>Events</div>
                        </a>
                        <ul class="menu-sub" id="events-submenu">
                            <li class="menu-item {{ Route::is('event.index') ? 'active' : '' }}">
                                <a href="{{ route('event.index') }}" class="menu-link">
                                    <div>Events list</div>
                                </a>
                            </li>
                            <li class="menu-item {{ Route::is('event.create') ? 'active' : '' }}">
                                <a href="{{ route('event.create') }}" class="menu-link">
                                    <div>Add Event</div>
                                </a>
                            </li>
                        </ul>
                    </li>


                    {{-- Mohammad ghzawi --}}
                    <li class="menu-item menu-parent">
                        <a href="javascript:void(0)" class="menu-link menu-toggle">
                            <i class="menu-icon tf-icons mdi mdi-account"></i>
                            <div>Users</div>
                        </a>
                        <ul class="menu-sub ">
                            <li class="menu-item {{ request()->is('user') ? 'active' : '' }}">
                                <a href="{{ asset('/users') }}" class="menu-link">
                                    <div>User list</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    {{-- End Mohammad ghzawi --}}

                    {{-- Start Raghad bataineh --}}
                    <li class="menu-item menu-parent">
                        <a href="javascript:void(0)" class="menu-link menu-toggle">
                            <i class="menu-icon tf-icons mdi mdi-account-group"></i>
                            <div>Orgnizers</div>
                        </a>
                        <ul class="menu-sub ">
                            <li class="menu-item {{ request()->is('orgnizer.index') ? 'active' : '' }}">
                                <a href="{{ route('orgnizer.index') }}" class="menu-link">
                                    <div>Orgnizer list</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    {{-- End Raghad bataineh --}}
                    <li class="menu-item menu-parent">
                        <a href="javascript:void(0)" class="menu-link menu-toggle">
                            <i class="menu-icon tf-icons mdi mdi-comment"></i>
                            <div>Reviews</div>
                        </a>
                        <ul class="menu-sub ">
                            <li class="menu-item {{ request()->is('review.index') ? 'active' : '' }}">
                                <a href="{{ route('review.index') }}" class="menu-link">
                                    <div>Reviews list</div>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li class="menu-item menu-parent">
                        <a href="javascript:void(0)" class="menu-link menu-toggle">
                            <i class="menu-icon tf-icons mdi mdi-book-open"></i>
                            <div>Booking</div>
                        </a>
                        <ul class="menu-sub" id="events-submenu">
                            <li class="menu-item {{ Route::is('booking.index') ? 'active' : '' }}">
                                <a href="{{ route('booking.index') }}" class="menu-link">
                                    <div>all booking list</div>
                                </a>
                            </li>
                        </ul>
                    </li>


            </aside>
            <!-- / Menu -->
            <!-- Layout container -->
            <div class="layout-page">

                <!-- Navbar -->

                <nav class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                    id="layout-navbar">
                    <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                        <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                            <i class="mdi mdi-menu mdi-sm"></i>
                        </a>
                    </div>

                    <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                        <!-- Search -->
                        <div class="navbar-nav align-items-center" style="margin-top:38px">
                            <div class="nav-item d-flex align-items-center">
                                <i class="mdi mdi-search fs-4 lh-0"></i>
                                <input type="text" class="form-control border-0 shadow-none"
                                    placeholder="Search..." aria-label="Search..." />
                            </div>
                        </div>
                    </div>
                </nav>
                <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
                {{-- <script>
                    $(document).ready(function() {
                        $('.menu-toggle').click(function() {
                        
                            $('#events-submenu').slideToggle();
                        });
                    });
                </script> --}}
                <script>
                    $(document).ready(function() {
                        $('.menu-parent').click(function() {
                            const submenu = $(this).find('.menu-sub');
                            submenu.slideToggle();
                        });
                    });
                </script>
