import React from "react";
import Navbar from "./Navbar1";

const Explore = () => {
  return (
    <>
      <Navbar />
      <div className="Explore_div ">
        <h2>get to know the data</h2>
        <div className="Explore_center__div container my-5">
          <div className="row mx-auto">
            <div className="col-lg-6 col-10 mx-auto">
              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Name of your scan
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Domain to Scan</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Data to search
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3 ">
                  <button className="explore_btn">
                    <i class="fas fa-play"></i> Get Results
                  </button>
                </div>
              </form>

              <div className="explore_output__div">
                <label className="form-label explore_output__div__heading">
                  Output will be show here
                </label>
                <p>
                  What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
