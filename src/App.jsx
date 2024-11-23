/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";
//Component Imports
import Header from "./components/Header";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const App = () => {
  let marks = 80;
  return <div>{marks >= 80 ? <h1>Brilliant</h1> : <h1>Average</h1>}</div>;
};

export default App;
