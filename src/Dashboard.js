import React, { PureComponent , useState } from 'react';
import './Dashboard.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Label, ResponsiveContainer, PieChart, Pie, Cell  } from 'recharts';


function Dashboard() {
 
    const data = [
        { name: "Jan", sales: 100 },
        { name: "Feb", sales: 120 },
        { name: "Mar", sales: 150 },
        { name: "Apr", sales: 170 },
        { name: "May", sales: 200 },
        { name: "Jun", sales: 130 },
        { name: "Jul", sales: 70 },
        { name: "Aug", sales: 90 },
        { name: "Sep", sales: 110 },
        { name: "Oct", sales: 140 },
        { name: "Nov", sales: 170 },
        { name: "Dec", sales: 160 },
      ];
      const data1 = [
        { name: "A", value: 10},
        { name: "B", value: 30},
        { name: "C", value: 20},
      ];
      const colors = ["#f43598","#c4d7f0","#4b70dd",];
    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

    const changeStyle = () => {
        if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
        }
        else{
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };
    const changeStyle1 = () => {
        if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1");
        }
        else{
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };

    return (
        <div>
            <body id="page-top">

                {/*  <!-- Page Wrapper --> */}
                <div id="wrapper">

                    {/*  <!-- Sidebar --> */}
                    <ul className={style} id="accordionSidebar">

                        {/*  <!-- Sidebar - Brand --> */}
                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                            <div className="sidebar-brand-text mx-3">Dashboard</div>
                            <div className="text-center d-none d-md-inline">
                            <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                        </div>
                        </a>

                        {/*   <!-- Divider --> */}
                        <hr className="sidebar-divider my-0" />

                        {/*  <!-- Nav Item - Dashboard --> */}
                        <li className="nav-item active">
                            <a className="nav-link" href="index.html">
                                <span className='mx-3'>Dashboard</span></a>
                        </li>

                        {/*  <!-- Divider --> */}

                        {/*   <!-- Heading --> */}

                        {/*  <!-- Nav Item - Pages Collapse Menu --> */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                                aria-expanded="true" aria-controls="collapseTwo">
                                <span className='mx-3'>Products</span>
                            </a>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Custom Components:</h6>
                                    <a className="collapse-item" href="buttons.html">Buttons</a>
                                    <a className="collapse-item" href="cards.html">Cards</a>
                                </div>
                            </div>
                        </li>

                        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                                aria-expanded="true" aria-controls="collapseUtilities">
                                <span className='mx-3'>Customer</span>
                            </a>
                            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                                data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Custom Utilities:</h6>
                                    <a className="collapse-item" href="utilities-color.html">Colors</a>
                                    <a className="collapse-item" href="utilities-border.html">Borders</a>
                                    <a className="collapse-item" href="utilities-animation.html">Animations</a>
                                    <a className="collapse-item" href="utilities-other.html">Other</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                                aria-expanded="true" aria-controls="collapseUtilities">
                                <span className='mx-3'>Promote</span>
                            </a>
                            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                                data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Custom Utilities:</h6>
                                    <a className="collapse-item" href="utilities-color.html">Colors</a>
                                    <a className="collapse-item" href="utilities-border.html">Borders</a>
                                    <a className="collapse-item" href="utilities-animation.html">Animations</a>
                                    <a className="collapse-item" href="utilities-other.html">Other</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                                aria-expanded="true" aria-controls="collapseUtilities">
                                <span className='mx-3'>Help</span>
                            </a>
                            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                                data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Custom Utilities:</h6>
                                    <a className="collapse-item" href="utilities-color.html">Colors</a>
                                    <a className="collapse-item" href="utilities-border.html">Borders</a>
                                    <a className="collapse-item" href="utilities-animation.html">Animations</a>
                                    <a className="collapse-item" href="utilities-other.html">Other</a>
                                </div>
                            </div>
                        </li>
                        {/*  <!-- Divider --> */}

                        {/* <!-- Heading --> */}

                        {/*  <!-- Nav Item - Pages Collapse Menu --> */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                                aria-expanded="true" aria-controls="collapsePages">
                                <span className='mx-3'>Incomes</span>
                            </a>
                            <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Login Screens:</h6>
                                    <a className="collapse-item" href="login.html">Login</a>
                                    <a className="collapse-item" href="register.html">Register</a>
                                    <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                                    <div className="collapse-divider"></div>
                                    <h6 className="collapse-header">Other Pages:</h6>
                                    <a className="collapse-item" href="404.html">404 Page</a>
                                    <a className="collapse-item" href="blank.html">Blank Page</a>
                                </div>
                            </div>
                        </li>
                        {/* <!-- Divider --> */}

                        {/*   <!-- Sidebar Toggler (Sidebar) --> */}
                      {/*   <div className="text-center d-none d-md-inline">
                            <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                        </div> */}

                        {/*  <!-- Sidebar Message --> */}

                    </ul>
                    {/*  <!-- End of Sidebar --> */}

                    {/*  <!-- Content Wrapper --> */}
                    <div id="content-wrapper" className="d-flex flex-column">

                        {/*  <!-- Main Content --> */}
                        <div id="content">

                            {/*  <!-- Topbar --> */}
                            <nav className="navbar navbar-expand navbar-light topbar mb-4">

                                {/*  <!-- Sidebar Toggle (Topbar) --> */}
                                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={changeStyle1}>
                                    <i className="fa fa-bars"></i>
                                </button>

                                {/*  <!-- Topbar Search --> */}
                                <ul className="navbar-nav me-auto">
                                <li className="nav-item dropdown no-arrow">
                                        <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="mr-2 d-none d-lg-inline text-gray-800 large">Hello, Sharukh👋</span>
                                        </a>
                                        {/*  <!-- Dropdown - User Information --> */}
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                            aria-labelledby="userDropdown">
                                            <a className="dropdown-item" href="#">
                                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Profile
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Settings
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Activity Log
                                            </a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Logout
                                            </a>
                                        </div>
                                    </li>
                                    </ul>
                                {/*  <!-- Topbar Navbar --> */}
                                <ul className="navbar-nav ml-auto">

                                    {/*  <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                                    

                                    {/*  <!-- Nav Item - Alerts --> */}
                                    

                                    {/*  <!-- Nav Item - Messages --> */}
                                    

                                    {/* <div className="topbar-divider d-none d-sm-block"></div> */}

                                    {/* <!-- Nav Item - User Information --> */}

                                </ul>
                                <form
                                    className="d-none d-sm-inline-block form-inline me-auto ml-md-3 my-md-0 mw-50 navbar-search">
                                    <div className="input-group">
                                        <input type="text" className="form-control bg-white border-0 small" placeholder="Search for..."
                                            aria-label="Search" aria-describedby="basic-addon2" />
                                        <div className="input-group-append">
                                        </div>
                                    </div>
                                </form>
                            </nav>
                            {/*  <!-- End of Topbar --> */}

                            {/* <!-- Begin Page Content --> */}
                            <div className="container-fluid">

                                {/*  <!-- Page Heading --> */}

                                {/*  <!-- Content Row --> */}
                                <div className="row">

                                    {/*  <!-- Earnings (Monthly) Card Example --> */}
                                    <div className="col-xl-3 col-md-6 mb-4">
                                        <div className="card border-left-primary shadow h-80 py-2" style={{"maxWidth":"200px"}}>
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                            Earnings (Monthly)</div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  <!-- Earnings (Monthly) Card Example --> */}
                                    <div className="col-xl-3 col-md-6 mb-4">
                                        <div className="card border-left-success shadow h-80 py-2" style={{"maxWidth":"200px"}}>
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                            Earnings (Annual)</div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  <!-- Earnings (Monthly) Card Example --> */}
                                    <div className="col-xl-3 col-md-6 mb-4">
                                        <div className="card border-left-info shadow h-80 py-2" style={{"maxWidth":"200px"}}>
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                                                        </div>
                                                        <div className="row no-gutters align-items-center">
                                                            <div className="col-auto">
                                                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="progress progress-sm mr-2">
                                                                    <div className="progress-bar bg-info a1" role="progressbar"
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  <!-- Pending Requests Card Example --> */}
                                    <div className="col-xl-3 col-md-6 mb-4">
                                        <div className="card border-left-warning shadow h-80 py-2" style={{"maxWidth":"200px"}}>
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                            Pending Requests</div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <i className="fas fa-comments fa-2x text-gray-300"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*  <!-- Content Row --> */}

                                <div className="row">

                                    {/*   <!-- Area Chart --> */}
                                    <div className="col-xl-8 col-lg-7">
                                        <div className="card shadow mb-4">
                                            {/*  <!-- Card Header - Dropdown --> */}
                                            <div
                                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between" >
                                                <h6 className="m-0 font-weight-bold text-primary">Overview</h6>
                                                <div className="dropdown no-arrow">
                                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                        aria-labelledby="dropdownMenuLink">
                                                        <div className="dropdown-header">Dropdown Header:</div>
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  <!-- Card Body --> */}
                                            <div className="card-body">
                                                <div className="chart-area">
                                                <ResponsiveContainer width="100%" height="100%">
                                                    <BarChart
                                                    width={400}
                                                    height={400}
                                                    data={data}
                                                    
                                                    margin={{
                                                        top: 5,
                                                        right: 50,
                                                        left: 40,
                                                        
                                                        bottom: 5,
                                                    }}
                                                    barSize={40}
                                                    >
                                                    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                                                    {/* <YAxis /> */}
                                                    <Tooltip />
                                                    <Legend />
                                                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                                    <Bar dataKey="sales" fill="#4b70dd" background={{ fill: '#eee' }} radius={10}/>
                                                    </BarChart>
                                                </ResponsiveContainer>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  <!-- Pie Chart --> */}
                                    <div className="col-xl-4 col-lg-5">
                                        <div className="card shadow mb-4">
                                            {/*  <!-- Card Header - Dropdown --> */}
                                            <div
                                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 className="m-0 font-weight-bold text-primary">Customer<p className='font-weight-light text-dark'>
                                                    Customers that buys products
                                                    </p></h6>
                                                
                                                <div className="dropdown no-arrow">
                                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                        aria-labelledby="dropdownMenuLink">
                                                        <div className="dropdown-header">Dropdown Header:</div>
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  <!-- Card Body --> */}
                                            <div className="card-body">
                                                <div className="chart-pie pt-4 pb-2">
                                                    {/* Dounut */}
                                                    <PieChart width={300} height={200}>
                                                    <Pie
                                                        data={data1}
                                                        dataKey="value"
                                                        outerRadius={100}
                                                        innerRadius={50}
                                                    >
                                                         {data.map((entry, index) => (
                                                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                                                ))}
                                                                <Label value="65% growth" position="center" />
                                                            </Pie>
                                                    </PieChart>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*   <!-- Content Row --> */}
                                <div className="row">

                                    {/*   <!-- Content Column --> */}
                                    <div className="col-lg-6 mb-4">

                                        {/* <!-- Project Card Example --> */}
                                        <div className="card shadow mb-4">
                                            <div className="card-header py-3">
                                                <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                                            </div>
                                            <div className="card-body">
                                                <h4 className="small font-weight-bold">Server Migration <span
                                                    className="float-right">20%</span></h4>
                                                <div className="progress mb-4">
                                                    <div className="progress-bar bg-danger a2" role="progressbar" ></div>
                                                </div>
                                                <h4 className="small font-weight-bold">Sales Tracking <span
                                                    className="float-right">40%</span></h4>
                                                <div className="progress mb-4">
                                                    <div className="progress-bar bg-warning a3" role="progressbar" ></div>
                                                </div>
                                                <h4 className="small font-weight-bold">Customer Database <span
                                                    className="float-right">60%</span></h4>
                                                <div className="progress mb-4">
                                                    <div className="progress-bar a7" role="progressbar"></div>
                                                </div>
                                                <h4 className="small font-weight-bold">Payout Details <span
                                                    className="float-right">80%</span></h4>
                                                <div className="progress mb-4">
                                                    <div className="progress-bar bg-info a4" role="progressbar" ></div>
                                                </div>
                                                <h4 className="small font-weight-bold">Account Setup <span
                                                    className="float-right">Complete!</span></h4>
                                                <div className="progress">
                                                    <div className="progress-bar bg-success a5" role="progressbar" ></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- Color System --> */}
                                        <div className="row">
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-primary text-white shadow">
                                                    <div className="card-body">
                                                        Primary
                                                        <div className="text-white-50 small">#4e73df</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-success text-white shadow">
                                                    <div className="card-body">
                                                        Success
                                                        <div className="text-white-50 small">#1cc88a</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-info text-white shadow">
                                                    <div className="card-body">
                                                        Info
                                                        <div className="text-white-50 small">#36b9cc</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-warning text-white shadow">
                                                    <div className="card-body">
                                                        Warning
                                                        <div className="text-white-50 small">#f6c23e</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-danger text-white shadow">
                                                    <div className="card-body">
                                                        Danger
                                                        <div className="text-white-50 small">#e74a3b</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-secondary text-white shadow">
                                                    <div className="card-body">
                                                        Secondary
                                                        <div className="text-white-50 small">#858796</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-light text-black shadow">
                                                    <div className="card-body">
                                                        Light
                                                        <div className="text-black-50 small">#f8f9fc</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-dark text-white shadow">
                                                    <div className="card-body">
                                                        Dark
                                                        <div className="text-white-50 small">#5a5c69</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-lg-6 mb-4">

                                        {/* <!-- Illustrations --> */}
                                        <div className="card shadow mb-4">
                                            <div className="card-header py-3">
                                                <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
                                            </div>
                                            <div className="card-body">
                                                <div className="text-center">
                                                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 a6"
                                                        src="img/undraw_posting_photo.svg" alt="..." />
                                                </div>
                                                <p>Add some quality, svg illustrations to your project courtesy of <a
                                                    target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a
                                                    constantly updated collection of beautiful svg images that you can use
                                                    completely free and without attribution!</p>
                                                <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on
                                                    unDraw &rarr;</a>
                                            </div>
                                        </div>

                                        {/* <!-- Approach --> */}
                                        <div className="card shadow mb-4">
                                            <div className="card-header py-3">
                                                <h6 className="m-0 font-weight-bold text-primary">Development Approach</h6>
                                            </div>
                                            <div className="card-body">
                                                <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classNamees in order to reduce
                                                    CSS bloat and poor page performance. Custom CSS classNamees are used to create
                                                    custom components and custom utility classNamees.</p>
                                                <p className="mb-0">Before working with this theme, you should become familiar with the
                                                    Bootstrap framework, especially the utility classNamees.</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            {/*   <!-- /.container-fluid --> */}

                        </div>
                        {/*   <!-- End of Main Content -->

                                        <!-- Footer --> */}
                        <footer className="sticky-footer bg-white">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright &copy; Your Website 2021</span>
                                </div>
                            </div>
                        </footer>
                        {/* <!-- End of Footer --> */}

                    </div>
                    {/*  <!-- End of Content Wrapper --> */}

                </div>
                {/*  <!-- End of Page Wrapper -->

                                <!-- Scroll to Top Button--> */}
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>

                {/*  <!-- Logout Modal--> */}
                <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <a className="btn btn-primary" href="login.html">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>

            </body>
        </div>
    )
}

export default Dashboard;
