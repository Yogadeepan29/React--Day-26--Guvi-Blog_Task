import React from "react";

const PageNotFound = () => {
  return (
    <section id="404-section" className="container p-4 ">
      <div className="d-flex align-items-center justify-content-center flex-column flex-nowrap">
        <img
          className="img-fluid"
          src="https://www.guvi.in/blog/wp-content/themes/guvi-blog/assets/images/404-error-animate.svg"
          alt="404 image"
          width={600}
          height={400}
        />
        <h1 className="mb-3 fw-bold">Page Not Found</h1>
        <p
          className="text-secondary fw-medium text-center mb-4 text-wrap"
          style={{ letterSpacing: 1 }}
        >
          Oops! You are looking for something that doesn't actually exist
        </p>
        <a
          href="/"
          rel="noopener noreferrer"
          className="btn btn-success fw-semibold "
        >
          Go Homepage
        </a>
      </div>
    </section>
  );
};

export default PageNotFound;
