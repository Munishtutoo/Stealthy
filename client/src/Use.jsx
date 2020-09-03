import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
const UserUse = () => {
  return (
    <>
      <Navbar />
      <div className="service_div mt-5 bg-light">
        <h2>How to go ahead</h2>
        <div className="sevice_center__div container">
          <div className="row">
            <div className="col-lg-4 col-12 ">
              <div className="service_title mt-5 service_title__1">
                <i class="fas fa-play"></i>
                <NavLink to="/">
                  <h2>Register</h2>
                </NavLink>
              </div>
            </div>
            {/* 2nd service_title */}
            <div className="col-lg-4 col-12 ">
              <div className="service_title mt-5 service_title__2">
                <i class="fas fa-play"></i>
                <NavLink to="/">
                  <h2> Select Category </h2>
                </NavLink>
              </div>
            </div>
            {/* 3rd service_title */}
            <div className="col-lg-4 col-12 ">
              <div className="service_title mt-5 service_title__3">
                <i class="fas fa-play"></i>
                <NavLink to="/">
                  <h2> Get Results </h2>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserUse;
