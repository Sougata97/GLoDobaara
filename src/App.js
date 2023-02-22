import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Banner from "./components/banner/Banner";
import About_concept from "./components/about concept/About_concept";
import UserBooking from "./components/userbooking_component/Userbooking";
import About_physiotherapy from "./components/about_physiotherapy/About_physiotherapy";
import Our_service from "./components/our_service/Our_service";
import Footer_1 from "./components/footer1/Footer_1";
import Apply from "./components/apply_component/apply";
import Error from "./components/error/Error";
import Login from "./components/login/Login";
import Footer_2 from "./components/footer2/Footer_2";
import React, { useState, useEffect, CSSProperties } from "react";
import SyncLoader from "react-spinners/BarLoader";

function App() {
  const [loading, setloading] = useState(true);
  const override = {
    display: "flex",
    margin: "0 auto",
    backgroundColor: "var(--white)",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  };
  const speed= 1, colorLoader= "var(--pink)",siZE= 15;
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    },2800);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {loading ? (
                <SyncLoader
                  color={colorLoader}
                  cssOverride={override}
                  loading
                  size={siZE}
                  speedMultiplier={speed}
                  myprops={"Loading"}
                />
              ) : (
                <>
                  <Nav />
                  <Banner />
                  <About_concept />
                  <UserBooking />
                  <About_physiotherapy />
                  <Our_service />
                  <Apply />
                  <Footer_1 />
                  <Footer_2 />
                </>
              )}
            </>
          }
        ></Route>

        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <>
              {loading ? (
                <SyncLoader
                  color={colorLoader}
                  cssOverride={override}
                  loading
                  size={siZE}
                  speedMultiplier={speed}
                  myprops={"Loading"}
                />
              ) : (
                <>
                  <Nav />
                  <Banner />
                  <About_concept />
                  <Footer_1 />
                </>
              )}
            </>
          }
        ></Route>
        <Route
          path="/services"
          element={
            <>
              {loading ? (
                <SyncLoader
                  color={colorLoader}
                  cssOverride={override}
                  loading
                  size={siZE}
                  speedMultiplier={speed}
                  myprops={"Loading"}
                />
              ) : (
                <>
                  <Nav />
                  <Banner />
                  <Our_service />
                  <Footer_1 />
                </>
              )}
            </>
          }
        ></Route>
        <Route
          path="*"
          element={
            <>
              {loading ? (
                <SyncLoader
                  color={colorLoader}
                  cssOverride={override}
                  loading
                  size={siZE}
                  speedMultiplier={speed}
                />
              ) : (
                <>
                  <Error />
                </>
              )}
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
