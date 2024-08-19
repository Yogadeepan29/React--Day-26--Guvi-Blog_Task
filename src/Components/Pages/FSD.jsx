import React from "react";
import Card from "../Card";
import data from "../data/data";

const FSD = () => {
  const fsdBlogs = data.filter(
    (item) => item.category === "full-stack-development"
  );
  return (
    <>
      <h3 className=" fw-bold">Full Stack Develpoment</h3>
      <hr />
      <div className="row">
        {fsdBlogs.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default FSD;
