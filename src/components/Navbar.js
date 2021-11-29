import React from "react";
import Logo from "../pic/Logo1.png";
import { Link } from "react-scroll";
//fontawesome

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logo" src={Logo} alt="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
        </button>
        <div
          className="collapse navbar-collapse m-auto"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav m-auto ">
            <li className="nav-item active">
              <Link
                smooth={true}
                to="home"
                className="nav-link text-black text-uppercase ml-5 "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="about"
                offset={-110}
                className="nav-link text-black text-uppercase ml-5"
              >
                about
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="skills"
                offset={-110}
                className="nav-link text-black text-uppercase ml-5"
              >
                skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="resume"
                offset={-110}
                className="nav-link text-black text-uppercase ml-5"
              >
                education
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="projects"
                offset={-110}
                className="nav-link text-black text-uppercase ml-5"
              >
                projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="contact"
                offset={-110}
                className="nav-link text-black text-uppercase ml-5"
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
