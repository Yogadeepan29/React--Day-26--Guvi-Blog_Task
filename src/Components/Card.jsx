import React from "react";
import LazyLoad from "react-lazy-load";

const Card = ({ item }) => {
  return (
    <div className="col-lg-4 my-4">
      <div className="card border-0 shadow-sm position-relative h-100">
        <a href={item.url}>
          <LazyLoad
            src={item.img}
            alt={item.title}
            className="card-img-top img-fluid"
            style={{ objectFit: "cover", height: "200px" }}
            onError={(e) => {
              e.target.src = 'https://entrackr.com/storage/2022/09/Guvi.jpg';
            }}
          />
        </a>
        <div className="card-body">
          <a
            className="card-title text-decoration-none text-dark fs-5 fw-semibold"
            href={item.url}
          >
            <small>{item.title}</small>
          </a>
          <p className="card-author  mt-2 mb-0">
            <small>
              <span className="text-muted">By</span>&nbsp;{item.author}
            </small>
          </p>
          <div
            id="card-footer"
            className="mt-2 text-muted  d-flex flex-row flex-nowrap justify-content-between"
          >
            <small>
              <p className="mb-0 card-text ">{item.date}</p>
            </small>
            <small>
              <p className="mb-0 card-text">{item.duration} Min Read </p>
            </small>
          </div>
        </div>
        <div className="badge position-absolute d-flex align-items-center bg-white rounded-pill end-0 m-2 text-black px-2 py-1">
          <img
            src="https://www.guvi.in/blog/wp-content/themes/guvi-blog/assets/images/icons/eye.svg"
            height="auto"
            width="auto"
          />
          &nbsp;
          <p className="m-0">{item.views}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
