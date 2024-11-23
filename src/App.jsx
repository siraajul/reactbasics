/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";
//Component Imports
import Header from "./components/Header";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const App = () => {
  let city = ["Dhaka", "Barishal", "Chittagong", "Dinajpur", "Eswordi"];

  return (
    <div>
      <ul>
        {city.map((item, i) => {
          return <li key={i.toString}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
