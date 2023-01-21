import React from "react";
import "./banner.css";
import Logo from "./bannerbg.jpg";
import smimg from "./bannerbgsm.jpg"
export default function Banner() {
  return (
    <>
      <section className="banner">
        <img src={Logo} alt="" className="bg" />
        <img src={smimg} alt="" className="sm"/>
        <div className="bannerText">LET'S BE FRIENDS</div>
        <a href="#">Log In/Sign In</a>
      </section>
    </>
  );
}
