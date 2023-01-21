import React from "react";
import './About_physiotherapy.css';
import img from './img.jpg'

export default function About_physiotherapy() {
  return (
    <>
          <section className="about_physiotherapy">
              <div className="container">
                  <h2><b>Do you need</b> any physiotherapist?</h2>
                  <div className="d-flex flex-wrap">
                      <div className="box">
                          <img src={img} alt="" />
                      </div>
                      <div className="box-2">
                          <div className="box-inner">
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quos assumenda recusandae suscipit eveniet in autem. Aliquid fuga unde rem impedit. Possimus odio deserunt asperiores quo animi cumque sapiente recusandae?</p><br />
                              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic repellat culpa exercitationem! Similique at laboriosam iure reprehenderit vitae vel dolore, necessitatibus iusto placeat possimus et ipsa in sint laudantium tempore ut dolorum, neque vero. Ad!</p>
                          </div>
                      </div>
                  </div>
              </div>
      </section>
    </>
  );
}
