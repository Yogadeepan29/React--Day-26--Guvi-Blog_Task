import React from "react";
import Card from "../Card";
import data from "../data/data";

const DataScience = () => {
  const dataScienceBlogs = data.filter(
    (item) => item.category === "data-science"
  );
  return (
    <>
      <h3 className="fw-bold">Data Science</h3>
      <hr />
      <div className="row">
        {dataScienceBlogs.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default DataScience;
