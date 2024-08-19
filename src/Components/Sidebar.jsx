import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [selectedPath, setSelectedPath] = useState("/");
  const handleNavigation = (event) => {
    const path = event.target.value;
    if (path) {
      setSelectedPath(path);
      navigate(path);
    }
  };
  const handleSidebarClick = (path) => {
    setSelectedPath(path);
    navigate(path);
  };
  return (
    <>
      {/* Sidebar for large screens */}
      <nav className="sidebar d-none d-md-block py-4 sticky-top">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active bg-success text-white fw-medium d-flex justify-content-between align-items-center"
                  : "nav-link text-muted fw-medium d-flex justify-content-between align-items-center"
              }
              onClick={() => handleSidebarClick("/")}
            >
              <span>Trending Articles</span>
              <i className="fa-solid fa-angle-right"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/ai-ml"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active bg-success text-white fw-medium d-flex justify-content-between align-items-center"
                  : "nav-link text-muted fw-medium d-flex justify-content-between align-items-center"
              }
              onClick={() => handleSidebarClick("/ai-ml")}
            >
              <span>AI & ML</span>
              <i className="fa-solid fa-angle-right"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/blockchain"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active bg-success text-white fw-medium d-flex justify-content-between align-items-center"
                  : "nav-link text-muted fw-medium d-flex justify-content-between align-items-center"
              }
              onClick={() => handleSidebarClick("/blockchain")}
            >
              <span>Blockchain</span>
              <i className="fa-solid fa-angle-right"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/cloudcomputing"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active bg-success text-white fw-medium d-flex justify-content-between align-items-center"
                  : "nav-link text-muted fw-medium d-flex justify-content-between align-items-center"
              }
              onClick={() => handleSidebarClick("/cloud-computing")}
            >
              <span>Cloud Computing</span>
              <i className="fa-solid fa-angle-right"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/cybersecurity"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active bg-success text-white fw-medium d-flex justify-content-between align-items-center"
                  : "nav-link text-muted fw-medium d-flex justify-content-between align-items-center"
              }
              onClick={() => handleSidebarClick("/cybersecurity")}
            >
              <span>Cyber Security</span>
              <i className="fa-solid fa-angle-right"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/datascience"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active bg-success text-white fw-medium d-flex justify-content-between align-items-center"
                  : "nav-link text-muted fw-medium d-flex justify-content-between align-items-center"
              }
              onClick={() => handleSidebarClick("/datascience")}
            >
              <span>Data Science</span>
              <i className="fa-solid fa-angle-right"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/devops"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active bg-success text-white fw-medium d-flex justify-content-between align-items-center"
                  : "nav-link text-muted fw-medium d-flex justify-content-between align-items-center"
              }
              onClick={() => handleSidebarClick("/devops")}
            >
              <span>DevOps</span>
              <i className="fa-solid fa-angle-right"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/digitalmarketing"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active bg-success text-white fw-medium d-flex justify-content-between align-items-center"
                  : "nav-link text-muted fw-medium d-flex justify-content-between align-items-center"
              }
              onClick={() => handleSidebarClick("/digital-marketing")}
            >
              <span>Digital Marketing</span>
              <i className="fa-solid fa-angle-right"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/fsd"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active bg-success text-white fw-medium d-flex justify-content-between align-items-center"
                  : "nav-link text-muted fw-medium d-flex justify-content-between align-items-center"
              }
              onClick={() => handleSidebarClick("/full-stack-development")}
            >
              <span>Full Stack Development</span>
              <i className="fa-solid fa-angle-right"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/software-automation-testing"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active bg-success text-white fw-medium d-flex justify-content-between align-items-center"
                  : "nav-link text-muted fw-medium d-flex justify-content-between align-items-center"
              }
              onClick={() => handleSidebarClick("/software-automation-testing")}
            >
              <span>Software Automation & Testing</span>
              <i className="fa-solid fa-angle-right"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/ui-ux"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active bg-success text-white fw-medium d-flex justify-content-between align-items-center"
                  : "nav-link text-muted fw-medium d-flex justify-content-between align-items-center"
              }
              onClick={() => handleSidebarClick("/ui-ux")}
            >
              <span>UI/UX Designing</span>
              <i className="fa-solid fa-angle-right"></i>
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Dropdown for small screens */}
      <nav className="dropdown-sidebar mt-5 bg-body-tertiary p-3 d-block d-md-none">
        <h1 className="text-center mb-4">Browse Categories</h1>
        <select
          className="form-select mb-3 options"
          onChange={handleNavigation}
          value={selectedPath}
        >
          <option value="/">Trending Articles</option>
          <option value="/ai-ml">AI & ML</option>
          <option value="/blockchain">Blockchain</option>
          <option value="/cloudcomputing">Cloud Computing</option>
          <option value="/cybersecurity">Cyber Security</option>
          <option value="/datascience">Data Science</option>
          <option value="/devops">DevOps</option>
          <option value="/digitalmarketing">Digital Marketing</option>
          <option value="/fsd">Full Stack Development</option>
          <option value="/software-automation-testing">
            Software Automation & Testing
          </option>
          <option value="/ui-ux">UI/UX Designing</option>
        </select>
      </nav>
    </>
  );
};

export default Sidebar;
