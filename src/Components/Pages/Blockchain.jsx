import React from "react";
import Card from "../Card";
import data from "../data/data";

const Blockchain = () => {
  const blockChainBlogs = data.filter((item) => item.category === "blockchain");
  return (
    <>
      <h3 className="fw-bold">Blockchain</h3>
      <hr />
      <div className="row">
        {blockChainBlogs.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Blockchain;
