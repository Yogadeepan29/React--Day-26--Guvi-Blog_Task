import React from "react";
import Card from "../Card";
import data from "../data/data";

const DevOps = () => {
  const devOpsBlogs = data.filter((item) => item.category === "devops");
  return (
    <>
      <h3 className=" fw-bold">DevOps</h3>
      <hr />
      <div className="row">
        {devOpsBlogs.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default DevOps;
