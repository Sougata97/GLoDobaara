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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                similique eius animi suscipit minus consequatur provident!
                similique eius animi suscipit minus consequatur provident!
              </h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                modi reiciendis vitae fugit sed, nulla velit doloremque
                obcaecati harum eum nemo repellat perferendis deleniti magnam
                earum, dolorem eius corrupti quibusdam, temporibus aspernatur
                excepturi officiis accusamus. Labore maxime est praesentium
                quaerat earum maiores obcaecati officia voluptates architecto
                illo laboriosam similique, fuga deserunt quia possimus veniam
                laborum ipsam officiis necessitatibus quisquam. Tenetur,
                consequatur omnis. Ipsum exercitationem nobis dolor omnis
                perspiciatis! Doloremque similique rerum facere sequi eum
                dolorem unde temporibus sunt? Dolorem
                          </p>
                          <a href="/build_pages"><span>Read More</span></a>
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
