import React,{useState, useContext} from "react";
import { AppContext } from "../context/AppContext";

import '../styles/templates/header.css'
function Header() {
  return(
    <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
      <div className="container">
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarDefault"
          aria-controls="navbarDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
        <a className="navbar-brand text-brand" href="index.html">
          Estate<span className="color-b">Agency</span>
        </a>
        <button
          type="button"
          className="btn btn-link nav-search navbar-toggle-box-collapse d-md-none"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-expanded="false"
        >
          <span className="fa fa-search" aria-hidden="true" />
        </button>
        <div
          className="navbar-collapse collapse justify-content-end"
          id="navbarDefault"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="index.html">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html">
                Property
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="property-grid.html">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="blog-grid.html">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
