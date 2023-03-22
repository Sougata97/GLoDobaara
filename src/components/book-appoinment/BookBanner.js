import React from "react";
import { Link } from "react-router-dom";
import arrow from "./arrow.svg"
import "../banner/banner.css";
import "./booktwo.css";
import img from "../book-appoinment/banner.jpg";
import smimg from "./bannersm.jpg";
export default function BookBanner() {
  return (
    <>
      <section className="BookBanner banner row">
        <img src={img} alt="" className="bg" />
        <img src={smimg} alt="" className="sm" />
        <div className="BookBannerText">
          <h3>Home</h3>
          <img src={arrow}/>
          <h3>Service</h3>
        </div>
      </section>
    </>
  );
}
