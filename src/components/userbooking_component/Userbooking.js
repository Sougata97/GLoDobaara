import React from "react";
import { useState } from "react";
import SelectComponent from "./SelectComponent";
import "./userbooking.css";
const options = [
    { key: 1, value: "Test 1" },
    { key: 2, value: "Test 2" },
    { key: 3, value: "Test 3" },
    { key: 4, value: "Test 4" }
  ];
export default function UserBooking() {
    const [selectedOption, setSelectedOption] = useState("");

  return (
    <>
      <section className="book">
        <div className="userbookText">
          <h2><b>User</b> can book</h2>
          <p>User can book the priviledges according to their needs at their own comfortable time and place.</p>
        </div>
      <SelectComponent
        options={options}
        onChange={(item) => setSelectedOption(item)}
        selectedKey={selectedOption}
        placeholder={"Book Now"}
        />
        
      </section>
    </>
  );
}
