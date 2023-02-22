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
            <a href="/" className="logo">
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
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/build_pages">Contacts</a>
            <a href="/services">Services</a>
          </div>
        </div>
      </section>
    </>
  );
}
