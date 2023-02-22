import React from "react";
import { Link } from "react-router-dom";
import "../footer2/footer2.css";

export default function Footer_2() {
  return (
    <>
      <section className="footer2">
        <div className="container">
          <div className="footer-box2-wrap">
            <div className="footer-box2">
              <h3>ABOUT</h3>
              <p>
                Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed
                do eiusmod tempor incididunt ultimam quantum
              </p>
            </div>
            <div className="footer-box2">
              <ul>
                <li>
                  <Link to="/build_pages">Team</Link>
                </li>
                <li>
                  <Link to="/build_pages">Join us</Link>
                </li>
                <li>
                  <Link to="/build_pages">Ethic</Link>
                </li>
                <li>
                  <Link to="/build_pages">Goals</Link>
                </li>
              </ul>
            </div>
            <div className="footer-box2">
              <ul>
                <li>
                  <Link to="/build_pages">Team</Link>
                </li>
                <li>
                  <Link to="/build_pages">Join us</Link>
                </li>
                <li>
                  <Link to="/build_pages">Ethic</Link>
                </li>
                <li>
                  <Link to="/build_pages">Goals</Link>
                </li>
              </ul>
            </div>
            <div className="footer-box2">
              <ul>
                <li>
                  <Link to="/build_pages">Team</Link>
                </li>
                <li>
                  <Link to="/build_pages">Join us</Link>
                </li>
                <li>
                  <Link to="/build_pages">Ethic</Link>
                </li>
                <li>
                  <Link to="/build_pages">Goals</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
