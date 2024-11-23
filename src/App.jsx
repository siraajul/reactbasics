/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";
//Component Imports
import Header from "./components/Header";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const App = () => {
  let marks = 80;

  return (
    <div>
      {(() => {
        if (marks > 80 && marks < 100) {
          return <h1>A+</h1>;
        } else if (marks > 70 && marks < 90) {
          return <h1>A</h1>;
        }
      })()}
    </div>
  );
};

export default App;
