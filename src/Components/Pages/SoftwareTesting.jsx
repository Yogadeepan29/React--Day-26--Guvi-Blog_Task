import React from "react";
import Card from "../Card";
import data from "../data/data";

const SoftwareTesting = () => {
  const softwareTestingBlogs = data.filter(
    (item) => item.category === "software-testing"
  );
  return (
    <>
      <h3 className="fw-bold">Software Automation & Testing</h3>
      <hr />
      <div className="row">
        {softwareTestingBlogs.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default SoftwareTesting;
