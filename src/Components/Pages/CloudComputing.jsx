import React from "react";
import Card from "../Card";
import data from "../data/data";

const CloudComputing = () => {
  const cloudComputingBlogs = data.filter(
    (item) => item.category === "cloud-computing");
  return (
    <>
      <h3 className=" fw-bold">Cloud Computing</h3>
      <hr />
      <div className="row">
        {cloudComputingBlogs.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default CloudComputing;
