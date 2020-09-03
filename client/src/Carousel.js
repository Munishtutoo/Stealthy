import React from "react";
import { NavLink } from "react-router-dom";

const Carousel = () => {
  return (
    <>
      <div className="main_header_div mt-5">
        <div className="center_div">
          <NavLink to="/login">
            <h2 className="main_header__text">data has the power </h2>
            <button className="main_header__btn"> Explore Now </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Carousel;
