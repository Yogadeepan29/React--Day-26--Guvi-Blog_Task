import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container bg-dark text-center text-white  pt-3">
      <a className="a icon-link text-white" href="#home">
        <i className="fa-solid fa-arrow-up fa-bounce"></i>
      </a>
      <p className="text-white pt-2">
        Terms and Conditions &nbsp;&nbsp;|&nbsp;&nbsp; Privacy Policy
        &nbsp;&nbsp;|&nbsp;&nbsp; &copy; GUVI Geeks Network Pvt. Ltd.
      </p>
    </footer>
  );
};

export default Footer;
