import React from "react";
import Card from "../Card";
import data from "../data/data";

const CyberSecurity = () => {
  const cyberSecurityBlogs = data.filter(
    (item) => item.category === "cyber-security"
  );
  return (
    <>
      <h3 className=" fw-bold">Cyber Security</h3>
      <hr />
      <div className="row">
        {cyberSecurityBlogs.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default CyberSecurity;
