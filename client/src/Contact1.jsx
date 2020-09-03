import React, { Fragment, Component } from "react";
import Navbar from "./Navbar1";
import axios from "axios";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      query: "",
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/public/user/contactus", JSON.stringify(this.state), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          alert("Thank you for your response");
        } else {
          const error = new Error(response.error);
          throw error;
        }
      })
      .catch((errors) => {
        alert("Please try again");
        console.log(errors);
      });
  };
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="Explore_div  bg-light">
          <h2>Any Queries</h2>
          <div className="Explore_center__div container my-5">
            <div className="row mx-auto">
              <div className="col-lg-6 col-10 mx-auto">
                <form
                  action="https://formspree.io/Stealthy990@gmail.com"
                  method="POST"
                >
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Name
                    </label>
                    <input
                      type="Name"
                      name="txtName"
                      //   value=""
                      //   value={this.state.name}
                      //   onChange={this.handleInputChange}
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
                      name="txtEmail"
                      //   value={this.state.email}
                      //   value=""
                      //   onChange={this.handleInputChange}
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
                      name="txtQueries"
                      //   value=""
                      //   value={this.state.query}
                      //   onChange={this.handleInputChange}
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    />
                  </div>

                  <div className="mb-3 ">
                    <button className="explore_btn" type="submit" name="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
