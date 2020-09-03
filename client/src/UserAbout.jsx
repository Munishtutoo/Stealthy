import React from "react";
import Navbar from "./Navbar1";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about_div py-5">
        <h2>About Us</h2>
        <div className="about_center__div container my-5">
          <div className="row mx-auto">
            <div className="col-lg-6 col-10 mx-auto  ">
              <img
                className="img-fluid rounded mb-4"
                src="https://picsum.photos/400/200"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-10 mx-auto ">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                voluptate nihil eum consectetur similique? Consectetur, quod,
                incidunt, harum nisi dolores delectus reprehenderit voluptatem
                perferendis dicta dolorem non blanditiis ex fugiat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
                magni, aperiam vitae illum voluptatum aut sequi impedit non
                velit ab ea pariatur sint quidem corporis eveniet. Odit,
                temporibus reprehenderit dolorum!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                consequuntur, modi mollitia corporis ipsa voluptate corrupti eum
                ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti
                necessitatibus perspiciatis quis?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
