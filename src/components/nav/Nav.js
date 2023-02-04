import React from "react";
import "./nav.css";
import Logo from "./l.png";
import { Link } from "react-router-dom";

export default function nav() {
  return (
    <>
      <section className="nav align-center">
        <div className="nav align-center">
          <input type="checkbox" id="nav-check" />
          <div className="nav-header">
            <Link to="/" className="logo">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="nav-btn">
            <label htmlFor="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <a href="#">Contacts</a>
            <Link to="/services">Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
