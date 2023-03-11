import React from "react";
// import PropTypes from "prop-types";
import "./Login.css";
import Nav from "../nav/Nav";
import sideImg from "./31474530.jpg";
export default function Login(props) {
  return (
    <>
      <Nav />
      <section className="login">
        <div className="login_box">
          <div className="login-box">
            <img src={sideImg} alt="" />
            <h2>Where do you want to login?</h2>
          </div>
          <div className="login-box">
            <a href="/user_Login">
              <span>User Login</span>
            </a>
          </div>
          <div className="login-box">
            <a href="/admin_Login">
              <span>Admin Login</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
