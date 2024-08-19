import React from "react";
import Card from "../Card";
import data from "../data/data";

const DigitalMarketing = () => {
  const digitalMarketingBlogs = data.filter(
    (item) => item.category === "digital-marketing"
  );
  return (
    <>
      <h3 className=" fw-bold">Digital Marketing</h3>
      <hr />
      <div className="row">
        {digitalMarketingBlogs.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default DigitalMarketing;
