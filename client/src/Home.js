import React from "react";
import Slider from "./Slider";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Service from "./Service";
import About from "./About";
import Social from "./Social";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Service />
      <About />
      <Contact />
      <Social />
    </>
  );
};

export default Home;
