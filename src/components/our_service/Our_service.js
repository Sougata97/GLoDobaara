import React from "react";
import "./our_service.css";
import Our_serv_box1 from "./Our_serv_box1";
import Our_serv_box2 from "./Our_serv_box2";

export default function Our_service() {
  return (
    <>
      <section className="our_service">
        <div className="container our-wrap">
          <div className="heading text-center">
            <h2>
              <b>OUR</b> SERVICES
            </h2>
          </div>
          <div className="content d-flex">
            <Our_serv_box1 />
            <Our_serv_box2 />
            <Our_serv_box2 />
            <Our_serv_box1 />
            <Our_serv_box1 />
            <Our_serv_box2 />
            <Our_serv_box2 />
            <Our_serv_box1 />
          </div>
          <div className="more">
            <a href="#" className="btn">
              More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
