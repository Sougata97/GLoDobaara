import React from "react";
import "./nav.css";
import Logo from "./l.png";

export default function nav() {
  return (
    <>
      <section className="nav align-center">
        <div className="nav align-center">
          <input type="checkbox" id="nav-check" />
          <div className="nav-header">
            <a href="#" className="logo">
              <img src={Logo} alt="" />
            </a>
          </div>
          <div className="nav-btn">
            <label htmlFor="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Contacts</a>
            <a href="#">Services</a>
          </div>
        </div>
      </section>
    </>
  );
}
