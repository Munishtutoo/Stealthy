import React from "react";

const Accordian = () => {
  return (
    <>
      {/* <!-- Card --> */}
      <div
        className="card card-image"
        // style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);"
      >
        {/* <!-- Content --> */}
        <div className="rgba-black-strong py-5 px-4">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10 col-xl-8">
              {/* <!--Accordion wrapper--> */}
              <div
                className="accordion  accordion-5"
                id="accordionEx5"
                role="tablist"
                aria-multiselectable="true"
              >
                {/* <!-- Accordion card --> */}
                <div className="card mb-4">
                  {/* <!-- Card header --> */}
                  <div
                    className="card-header p-0 z-depth-1"
                    role="tab"
                    id="heading30"
                  >
                    <a
                      data-toggle="collapse"
                      data-parent="#accordionEx5"
                      href="#collapse30"
                      aria-expanded="true"
                      aria-controls="collapse30"
                    >
                      <i
                        className="fas fa-cloud fa-2x p-3 mr-4 float-left black-text"
                        aria-hidden="true"
                      ></i>
                      <h4 className="text-uppercase white-text mb-0 py-3 mt-1">
                        Interview #1
                      </h4>
                    </a>
                  </div>

                  {/* <!-- Card body --> */}
                  <div
                    id="collapse30"
                    className="collapse show"
                    role="tabpanel"
                    aria-labelledby="heading30"
                    data-parent="#accordionEx5"
                  >
                    <div className="card-body rgba-black-light white-text z-depth-1">
                      <p className="p-md-4 mb-0">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Accordion card --> */}

                {/* <!-- Accordion card --> */}
                <div className="card mb-4">
                  {/* <!-- Card header --> */}
                  <div
                    className="card-header p-0 z-depth-1"
                    role="tab"
                    id="heading31"
                  >
                    <a
                      data-toggle="collapse"
                      data-parent="#accordionEx5"
                      href="#collapse31"
                      aria-expanded="true"
                      aria-controls="collapse31"
                    >
                      <i
                        className="fas fa-comment-alt fa-2x p-3 mr-4 float-left black-text"
                        aria-hidden="true"
                      ></i>
                      <h4 className="text-uppercase white-text mb-0 py-3 mt-1">
                        Interview #2
                      </h4>
                    </a>
                  </div>

                  {/* <!-- Card body --> */}
                  <div
                    id="collapse31"
                    className="collapse"
                    role="tabpanel"
                    aria-labelledby="heading31"
                    data-parent="#accordionEx5"
                  >
                    <div className="card-body rgba-black-light white-text z-depth-1">
                      <p className="p-md-4 mb-0">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Accordion card --> */}

                {/* <!-- Accordion card --> */}
                <div className="card mb-4">
                  {/* <!-- Card header --> */}
                  <div
                    className="card-header p-0 z-depth-1"
                    role="tab"
                    id="heading32"
                  >
                    <a
                      data-toggle="collapse"
                      data-parent="#accordionEx5"
                      href="#collapse32"
                      aria-expanded="true"
                      aria-controls="collapse32"
                    >
                      <i
                        className="fas fa-cogs fa-2x p-3 mr-4 float-left black-text"
                        aria-hidden="true"
                      ></i>
                      <h4 className="text-uppercase white-text mb-0 py-3 mt-1">
                        Interview #3
                      </h4>
                    </a>
                  </div>

                  {/* <!-- Card body --> */}
                  <div
                    id="collapse32"
                    className="collapse"
                    role="tabpanel"
                    aria-labelledby="heading32"
                    data-parent="#accordionEx5"
                  >
                    <div className="card-body rgba-black-light white-text z-depth-1">
                      <p className="p-md-4 mb-0">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Accordion card --> */}
              </div>
              {/* <!--/.Accordion wrapper--> */}
            </div>
          </div>
        </div>
        {/* <!-- Content --> */}
      </div>
      {/* <!-- Card --> */}
    </>
  );
};

export default Accordian;
