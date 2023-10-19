@extends('Admin.layout.master')
@section('title','Admin-Home')

	@section('content')

      <div class="content-wrapper">

        <!-- Content -->
        
          <div class="container-xxl flex-grow-1 container-p-y">
            
            <br> <br>
<div class="row gy-4">
  <!-- Congratulations card -->

  <!--/ Congratulations card -->
  <!-- Cards with icon profit and loss info -->
  <div class="col-xl-4 col-lg-5">
    <div class="row gy-4">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-header d-flex align-items-center justify-content-between">
            <div class="avatar">
              <div class="avatar-initial bg-info rounded-circle shadow">
                <i class="mdi mdi-trending-up mdi-24px"></i>
              </div>
            </div>
            <div class="dropdown">
              <button class="btn p-0" type="button" id="transactionsID" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="mdi mdi-dots-vertical mdi-24px"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="transactionsID">
                <a class="dropdown-item" href="javascript:void(0);">Refresh</a>
                <a class="dropdown-item" href="javascript:void(0);">Share</a>
                <a class="dropdown-item" href="javascript:void(0);">Update</a>
              </div>
            </div>
          </div>
          <div class="card-body pt-0">
            <h6 class="mb-2">Transactions</h6>
            <div class="d-flex flex-wrap mb-2 gap-2 pb-1 align-items-center">
              <h4 class="mb-0">1.2k</h4>
              <small class="text-success mt-1">+38%</small>
            </div>
            <small>Daily Transactions</small>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-header d-flex align-items-center justify-content-between">
            <div class="avatar">
              <div class="avatar-initial bg-success rounded-circle shadow">
                <i class="mdi mdi-currency-usd mdi-24px"></i>
              </div>
            </div>
            <div class="dropdown">
              <button class="btn p-0" type="button" id="revenueID" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="mdi mdi-dots-vertical mdi-24px"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="revenueID">
                <a class="dropdown-item" href="javascript:void(0);">Refresh</a>
                <a class="dropdown-item" href="javascript:void(0);">Share</a>
                <a class="dropdown-item" href="javascript:void(0);">Update</a>
              </div>
            </div>
          </div>
          <div class="card-body pt-0">
            <h6 class="mb-2">Revenue</h6>
            <div class="d-flex flex-wrap mb-2 pb-1 align-items-center gap-2">
              <h4 class="mb-0">$95.2k</h4>
              <small class="text-success mt-1">+12%</small>
            </div>
            <small>Revenue Increase</small>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--/ Cards with icon profit and loss info -->
  <!-- Total Profit Chart & Last month balance -->
  <div class="col-xl-8">
    <div class="card">
      <div class="row">
        <div class="col-md-7 pe-md-0">
          <div class="card-header">
            <h5 class="mb-0">Total Profit</h5>
          </div>
          <div class="card-body">
            <div id="totalProfitChart"></div>
          </div>
        </div>
        <div class="col-md-5 border-start ps-md-0">
          <hr class="d-block d-md-none my-0">
          <div class="card-header">
            <div class="d-flex justify-content-between">
              <h5 class="mb-1">$482.85k</h5>
              <div class="dropdown">
                <button class="btn p-0" type="button" id="totalProfit" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="mdi mdi-dots-vertical mdi-24px"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="totalProfit">
                  <a class="dropdown-item" href="javascript:void(0);">Last 28 Days</a>
                  <a class="dropdown-item" href="javascript:void(0);">Last Month</a>
                  <a class="dropdown-item" href="javascript:void(0);">Last Year</a>
                </div>
              </div>
            </div>
            <p class="text-body mb-0">Last month balance $234.40k</p>
          </div>
          <div class="card-body pt-3">
            <div class="d-flex align-items-center mb-3 pb-1">
              <div class="avatar">
                <div class="avatar-initial bg-label-success rounded">
                  <i class="mdi mdi-trending-up mdi-24px"></i>
                </div>
              </div>
              <div class="ms-3 d-flex flex-column">
                <h6 class="mb-1">$48,568.20</h6>
                <small>Total Profit</small>
              </div>
            </div>
            <div class="d-flex align-items-center mb-3 pb-1">
              <div class="avatar">
                <div class="avatar-initial bg-label-primary rounded">
                  <i class="mdi mdi-account-outline mdi-24px"></i>
                </div>
              </div>
              <div class="ms-3 d-flex flex-column">
                <h6 class="mb-1">$38,453.25</h6>
                <small>Total Income</small>
              </div>
            </div>
            <div class="d-flex align-items-center mb-3 pb-1">
              <div class="avatar">
                <div class="avatar-initial bg-label-secondary rounded">
                  <i class="mdi mdi-cellphone-link mdi-24px"></i>
                </div>
              </div>
              <div class="ms-3 d-flex flex-column">
                <h6 class="mb-1">$2,453.45</h6>
                <small>Total Expense</small>
              </div>
            </div>
            <div class="d-grid">
              <button class="btn btn-primary" type="button">View Report</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--/ Total Profit Chart & Last month balance -->
  <!-- three chart -->
  <div class="col-xl-4">
    <div class="row gy-4">
      <!-- Total Sales -->
      <div class="col-xl-12 col-md-6">
        <div class="card">
          <div class="card-body d-flex justify-content-between align-items-center flex-xl-nowrap flex-wrap">
            <div class="me-3">
              <h5 class="mb-4">Total Sales</h5>
              <div class="small mb-1">Calculated in last 7 days</div>
              <div class="d-flex align-items-center gap-2">
                <h4 class="mb-0">$25,980</h4>
                <small class="text-success lh-sm">+15.6%</small>
              </div>
            </div>
            <div id="totalSalesDonutChart" class="mt-3 mt-md-0"></div>
          </div>
        </div>
      </div>
      <!-- Total Sales -->
      <!-- Total Revenue chart -->
      <div class="col-xl-6 col-md-3 col-sm-6">
        <div class="card">
          <div class="card-header pb-0">
            <h4 class="mb-0">$35.4k</h4>
          </div>
          <div class="card-body">
            <div id="totalRevenueChart" class="mb-3"></div>
            <h6 class="text-center mb-0">Total Revenue</h6>
          </div>
        </div>
      </div>
      <!--/ Total Revenue chart -->
      <!-- Total Sales chart -->
      <div class="col-xl-6 col-md-3 col-sm-6">
        <div class="card">
          <div class="card-header pb-0">
            <h4 class="mb-0">135k</h4>
          </div>
          <div class="card-body">
            <div id="totalSalesSemiDonutChart" class="mb-4"></div>
            <h6 class="text-center mb-0">Total Sales</h6>
          </div>
        </div>
      </div>
      <!--/ Total Sales chart -->
    </div>
  </div>
  <!--/ three chart -->
 
 
  <!-- Website Statistics -->
  <div class="col-xl-4 col-md-6 ">
    <div class="card">
      <div class="card-header d-flex align-items-center justify-content-between">
        <h5 class="card-title m-0 me-2">Website Statistics</h5>
        <div class="dropdown">
          <button class="btn p-0" type="button" id="webStatistics" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="mdi mdi-dots-vertical mdi-24px"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-end" aria-labelledby="webStatistics">
            <a class="dropdown-item" href="javascript:void(0);">Last 28 Days</a>
            <a class="dropdown-item" href="javascript:void(0);">Last Month</a>
            <a class="dropdown-item" href="javascript:void(0);">Last Year</a>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-end mb-3">
          <div class="mb-2">
            <h5 class="display-3 mb-0">4,590</h5>
            <small>Total Traffic</small>
          </div>
          <div id="webVisitors"></div>
        </div>
        <div class="d-flex align-items-center border-top py-3">
          <span class="text-success me-2">
            <i class="mdi mdi-circle"></i>
          </span>
          <h6 class="fw-normal mb-0">Direct</h6>
          <div class="flex-grow-1"></div>
          <h6 class="text-end me-4 mb-0">86,471</h6>
          <h6 class="text-end me-2 mb-0">15%</h6>
          <i class="mdi mdi-chevron-down text-danger mdi-24px"></i>
        </div>
        <div class="d-flex align-items-center border-top py-3">
          <span class="text-primary me-2">
            <i class="mdi mdi-circle"></i>
          </span>
          <h6 class="fw-normal mb-0">Organic Search</h6>
          <div class="flex-grow-1"></div>
          <h6 class="text-end me-4 mb-0">57,484</h6>
          <h6 class="text-end me-2 mb-0">85%</h6>
          <i class="mdi mdi-chevron-up text-success mdi-24px"></i>
        </div>
        <div class="d-flex align-items-center border-top py-3">
          <span class="text-warning me-2">
            <i class="mdi mdi-circle"></i>
          </span>
          <h6 class="fw-normal mb-0">Referral</h6>
          <div class="flex-grow-1"></div>
          <h6 class="text-end me-4 mb-0">2,534</h6>
          <h6 class="text-end me-2 mb-0">48%</h6>
          <i class="mdi mdi-chevron-up text-success mdi-24px"></i>
        </div>
        <div class="d-flex align-items-center border-top pt-3">
          <span class="text-danger me-2">
            <i class="mdi mdi-circle"></i>
          </span>
          <h6 class="fw-normal mb-0">Mail</h6>
          <div class="flex-grow-1"></div>
          <h6 class="text-end me-4 mb-0">977</h6>
          <h6 class="text-end me-2 mb-0">36%</h6>
          <i class="mdi mdi-chevron-down text-danger mdi-24px"></i>
        </div>
      </div>
    </div>
  </div>
  <!--/ Website Statistics -->
 
</div>

          </div>

          
          <div class="content-backdrop fade"></div>
        </div>
        <!-- Content wrapper -->
      </div>
      <!-- / Layout page -->
    </div>

    
    
    <!-- Overlay -->
    <div class="layout-overlay layout-menu-toggle"></div>
    
    
    <!-- Drag Target Area To SlideIn Menu On Small Screens -->
    <div class="drag-target"></div>
    
  </div>
  <!-- / Layout wrapper -->

  

  

  

    @endsection