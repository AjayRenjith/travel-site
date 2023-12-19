import React, { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import { HoverContext } from "./../../assets/js/HoverContext";
import NavToggler from "../../Components/Bottons/NavToggler/NavToggler";

const CoTravelNavbar = () => {
  const { isHovered, setIsHovered } = useContext(HoverContext);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsNavOpen(true);
    };

    const handleMouseLeave = () => {
      setIsNavOpen(false);
    };

    const navbarElement = document.querySelector(".nav");
    navbarElement.addEventListener("mouseenter", handleMouseEnter);
    navbarElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      navbarElement.removeEventListener("mouseenter", handleMouseEnter);
      navbarElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <nav
      className={`navbar m-auto navbar-expand-lg nav ${
        isHovered ? "bg-light" : ""
      }`}
      style={{ boxShadow: "0 10px 8px rgba(0, 0, 0, 0.1)" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <a className="navbar-brand" href="#">
            <img src="images/Navbar/nav-icon.png" alt="logo" />
          </a>
        </div>

        <div
          className={`collapse navbar-collapse justify-content-center ${
            isNavOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Bucket List
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Experience
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Co-Travel
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sign In
              </a>
            </li>
          </ul>
        </div>

        <button className="button-signup" role="button">
          SignUp
        </button>

        <div>
          <NavToggler />
        </div>
      </div>
    </nav>
  );
};

export default CoTravelNavbar;
