import React, { useState } from "react";
import Card from "../Card";
import data from "../data/data";

const Trending = () => {
  const [trendingBlogs, settrendingBlogs] = useState(9);
  const loadMore = () => {
    settrendingBlogs(trendingBlogs + 9);
  };
  return (
    <>
      <h3 className=" fw-bold">Trending Articles</h3>
      <hr />
      <div className="row">
        {data.slice(0, trendingBlogs).map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      {trendingBlogs < data.length && (
        <div className="d-flex justify-content-center align-items-center pt-3">
          <button className="btn btn-outline-success " onClick={loadMore}>
            Load More Articles
          </button>
        </div>
      )}
    </>
  );
};

export default Trending;
