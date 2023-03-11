import React from "react";
import "./about_concept.css";
import bg from "./bg.png";
export default function About_concept() {
  return (
    <>
      <section className="about_concept">
        <div className="container">
          <div className="d-flex align-center about-box">
            <div className="box-left">
              <h2>ABOUT</h2>&nbsp;&nbsp;<h3>OUR CONCEPT</h3>
              <h5>
                G Lo Dobaara" (popularly known as “GLD”) is a distinct Strategic
                Business Unit (SBU) of Abchi Technologies Private Limited and an
                initiative of social entrepreneurship.
              </h5>
              <p>
                G Lo Dobaara" (popularly known as “GLD”) is a distinct Strategic
                Business Unit (SBU) of Abchi Technologies Private Limited and an
                initiative of social-entrepreneurship. GLD provides quality time
                to elderly people who need a companion. High-achieving children
                now relocate on their own to a new city or perhaps another
                country for a career or married life. Families in metropolitan
                cultures are getting estranged from their own neighbourhoods. In
                addition, the majority of metropolitan households only have one
                child. If their children relocate to a new city, the elderly
                couples feel awkward to cope up in a different culture and
                rather feel comfortable staying at their original residences.
                Their main problem is loneliness and it is taking a toll on
                their mental & physical health. Here, the couples and their
                children are helpless because they don’t know who can take them
                out of this situation...
              </p>
              <a href="/about">
                <span>Read More</span>
              </a>
            </div>
            <div className="box-right">
              <img src={bg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
