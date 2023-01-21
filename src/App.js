import React from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Banner from "./components/banner/Banner";
import About_concept from "./components/about concept/About_concept";
import UserBooking from "./components/userbooking_component/Userbooking";
import About_physiotherapy from "./components/about_physiotherapy/About_physiotherapy";
import Our_service from "./components/our_service/Our_service";

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <About_concept />
      <UserBooking />
      <About_physiotherapy />
      <Our_service/>
    </>
  );
}

export default App;
