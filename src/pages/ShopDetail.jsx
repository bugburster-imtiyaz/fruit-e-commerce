import React from 'react';

function ShopDetail() {
  return (
    <div>
      {/* Spinner Start */}
      <div id="spinner" className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center">
        <div className="spinner-grow text-primary" role="status"></div>
      </div>
      {/* Spinner End */}

      {/* Navbar start */}
      <div className="container-fluid fixed-top">
        <div className="container topbar bg-primary d-none d-lg-block">
          <div className="d-flex justify-content-between">
            <div className="top-info ps-2">
              <small className="me-3"><i className="fas fa-map-marker-alt me-2 text-secondary"></i> <a href="#" className="text-white">123 Street, New York</a></small>
              <small className="me-3"><i className="fas fa-envelope me-2 text-secondary"></i><a href="#" className="text-white">Email@Example.com</a></small>
            </div>
            <div className="top-link pe-2">
              <a href="#" className="text-white"><small className="text-white mx-2">Privacy Policy</small>/</a>
              <a href="#" className="text-white"><small className="text-white mx-2">Terms of Use</small>/</a>
              <a href="#" className="text-white"><small className="text-white ms-2">Sales and Refunds</small></a>
            </div>
          </div>
        </div>
        <div className="container px-0">
          <nav className="navbar navbar-light bg-white navbar-expand-xl">
            <a href="index.html" className="navbar-brand"><h1 className="text-primary display-6">Fruitables</h1></a>
            <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="fa fa-bars text-primary"></span>
            </button>
            <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
              <div className="navbar-nav mx-auto">
                <a href="index.html" className="nav-item nav-link">Home</a>
                <a href="shop.html" className="nav-item nav-link">Shop</a>
                <a href="shop-detail.html" className="nav-item nav-link active">Shop Detail</a>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                  <div className="dropdown-menu m-0 bg-secondary rounded-0">
                    <a href="cart.html" className="dropdown-item">Cart</a>
                    <a href="chackout.html" className="dropdown-item">Chackout</a>
                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                    <a href="404.html" className="dropdown-item">404 Page</a>
                  </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">Contact</a>
              </div>
              <div className="d-flex m-3 me-0">
                <button className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search text-primary"></i></button>
                <a href="#" className="position-relative me-4 my-auto">
                  <i className="fa fa-shopping-bag fa-2x"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">5</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}

      {/* Breadcrumb start */}
      <div className="container mt-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item"><a href="shop.html">Shop</a></li>
            <li className="breadcrumb-item active" aria-current="page">Shop Detail</li>
          </ol>
        </nav>
      </div>
      {/* Breadcrumb End */}

      {/* Product Detail Start */}
      <div className="container">
        {/* Product detail content */}
      </div>
      {/* Product Detail End */}

      {/* Description and Reviews Start */}
      <div className="container mt-5">
        {/* Description and Reviews content */}
      </div>
      {/* Description and Reviews End */}

      {/* Recently Viewed Products Start */}
      <div className="container mt-5">
        {/* Recently Viewed Products content */}
      </div>
      {/* Recently Viewed Products End */}

      {/* Brands Carousel Start */}
      <div className="container mt-5">
        {/* Brands Carousel content */}
      </div>
      {/* Brands Carousel End */}

      {/* Call to Action Start */}
      <div className="container mt-5">
        {/* Call to Action content */}
      </div>
      {/* Call to Action End */}

      {/* Newsletter Start */}
      <div className="container mt-5">
        {/* Newsletter content */}
      </div>
      {/* Newsletter End */}

      {/* Footer Start */}
      <div className="container mt-5">
        <footer>
          {/* Footer content */}
        </footer>
      </div>
      {/* Footer End */}
    </div>
  );
}

export default ShopDetail;
