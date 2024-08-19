import React from "react";
import Card from "../Card";
import data from "../data/data";

const AiMl = () => {
  const aiMlBlogs = data.filter((item) => item.category === "ai-ml");
  return (
    <>
      <h3 className="fw-bold">AI & ML</h3>
      <hr />
      <div className="row">
        {aiMlBlogs.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default AiMl;
