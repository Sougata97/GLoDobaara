import React from 'react';
import img from "../our_service/img.png";


export default function Our_serv_box1() {
  return (
    <>
      <div className="box">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className="text">
          <p>
            Let’s spend some quality time together. Book an appointment with our
            representative and spend some quality time playing cards, carom,
            chess, reading, books, or simply by adda
          </p>
          <a href="#" className='btn'><span>Book Now</span></a>
        </div>
      </div>
    </>
  );
}
