import React from "react";
import Card from "../Card";
import data from "../data/data";

const UiUx = () => {
  const uiUxBlogs = data.filter((item) => item.category === "ui-ux");
  return (
    <>
      <h3 className=" fw-bold">UI/UX Designing</h3>
      <hr />
      <div className="row">
        {uiUxBlogs.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default UiUx;
