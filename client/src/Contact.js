import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="Explore_div  ">
        <h2>Any Queries</h2>
        <div className="Explore_center__div container my-5">
          <div className="row mx-auto">
            <div className="col-lg-6 col-10 mx-auto">
              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Name
                  </label>
                  <input
                    type="Name"
                    className="form-control"
                    id="exampleInputName1"
                    aria-describedby="NameHelp"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your email"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Queries
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>

                <div className="mb-3 ">
                  <button className="explore_btn" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
