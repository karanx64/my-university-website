import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title subTitle="Our Programs" title="What We Offer" />
      <div className="container">
        <Programs />
      </div>
    </div>
  );
};

export default App;
