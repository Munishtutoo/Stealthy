import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-100 bg-light text-center">
        <div className="container-fluid social_icons py-3">
          <div className="social_icons__center">
            <a href="https://www.facebook.com" className="icoFacebook" title="Facebook">
              <i className="fab fa-2x fa-facebook"></i>
            </a>

            <a href="https://www.twitter.com" className="icoTwitter" title="Twitter">
              <i className="fab fa-2x fa-twitter"></i>
            </a>

            <a href="https://www.google.com" className="icoGoogle" title="Google +">
              <i className="fab fa-2x fa-google"></i>
            </a>

            <a href="https://www.linkedin.com" className="icoLinkedin" title="Linkedin">
              <i className="fab fa-2x fa-linkedin"></i>
            </a>
          </div>
        </div>
        <p>© 2020. All Rights Reserved | Terms and Conditions</p>
      </footer>
    </>
  );
};

export default Footer;
