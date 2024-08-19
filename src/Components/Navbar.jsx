import React from "react";

const Navbar = () => {
  return (
    <nav
      id="Navbar"
      className="container-fluid navbar navbar-expand-lg bg-body-tertiary py-1 fixed-top"
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            className="logo"
            src="https://www.guvi.in/blog/wp-content/themes/guvi-blog/assets/images/guvi-logo.svg"
            alt="Guvi Logo"
          />
          <span className="px-2 d-none d-sm-inline">|</span>
          <span className="text-muted d-none d-sm-inline ">Blog</span>
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-3 mb-lg-0 py-3">
            <li className="nav-item ">
              <div className="input-group ">
                <input
                  type="search"
                  className="form-control"
                  placeholder="What do you want to read?"
                />
                <span className="input-group-text">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
              </div>
            </li>
          </ul>
          <div className="d-flex justify-content-end align-items-center">
            <a
              href="/"
              className="nav-link text-success text-decoration-none fw-semibold"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
