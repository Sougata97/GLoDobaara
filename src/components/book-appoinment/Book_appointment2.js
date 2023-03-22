import React from 'react';
import "./booktwo.css";
import chooseImg from "../book-appoinment/choose_img.png";

export default function Book_appointment2() {
  return (
    <>
      <section className="bookapmt2">
        <div className="container">
          <div className="book-heading">
            <h2>Book Appointment</h2>
            <p>Let's Spend A Quality Time Together</p>
            <span></span>
            <span className="pink"></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="apointment2maincontent">
            <div className="apt2-wrap-left"><img src={chooseImg} alt="" /></div>
            <div className="apt2-wrap-right">
              <div className="monthapt2">
                <h2>MARCH 2023</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}