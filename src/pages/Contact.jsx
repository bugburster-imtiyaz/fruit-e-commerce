import React from 'react';

function Contact() {
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
          {/* Topbar Content */}
        </div>
        <div className="container px-0">
          {/* Navbar Content */}
        </div>
      </div>
      {/* Navbar End */}

      {/* Modal Search Start */}
      <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        {/* Modal Content */}
      </div>
      {/* Modal Search End */}

      {/* Single Page Header start */}
      <div className="container-fluid page-header py-5">
        {/* Page Header Content */}
      </div>
      {/* Single Page Header End */}

      {/* Contact Start */}
      <div className="container-fluid contact py-5">
        {/* Contact Content */}
      </div>
      {/* Contact End */}

      {/* Footer Start */}
      <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
        {/* Footer Content */}
      </div>
      {/* Footer End */}

      {/* Copyright Start */}
      <div className="container-fluid copyright bg-dark py-4">
        {/* Copyright Content */}
      </div>
      {/* Copyright End */}

      {/* Back to Top */}
      <a href="#" className="btn btn-primary border-3 border-primary rounded-circle back-to-top"><i className="fa fa-arrow-up"></i></a>

      {/* JavaScript Libraries */}
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
      <script src="lib/easing/easing.min.js"></script>
      <script src="lib/waypoints/waypoints.min.js"></script>
      <script src="lib/lightbox/js/lightbox.min.js"></script>
      <script src="lib/owlcarousel/owl.carousel.min.js"></script>

      {/* Template Javascript */}
      <script src="js/main.js"></script>
    </div>
  );
}

export default Contact;
