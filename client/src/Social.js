import React from "react";

const Social = () => {
  return (
    <>
      <div className="container-fluid social_icons py-3">
        <div className="social_icons__center">
          <a href="#" className="icoRss" title="Rss">
            <i className="fab fa-2x fa-facebook"></i>
          </a>

          <a href="#" className="icoFacebook" title="Facebook">
            <i className="fab fa-2x fa-instagram"></i>
          </a>

          <a href="#" className="icoTwitter" title="Twitter">
            <i className="fab fa-2x fa-twitter"></i>
          </a>

          <a href="#" className="icoGoogle" title="Google +">
            <i className="fab fa-2x fa-linkedin"></i>
          </a>

          <a href="#" className="icoLinkedin" title="Linkedin">
            <i className="fab fa-2x fa-google"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Social;
