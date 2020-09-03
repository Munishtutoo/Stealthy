import React from "react";
import Service from "./UserService";
import Social from "./Social";
import Carousel from "./Carousel1";
import Navbar from "./Navbar1";
import About from "./UserAbout";
import Contact from "./Contact1";
const UserHome = () => {
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

export default UserHome;
