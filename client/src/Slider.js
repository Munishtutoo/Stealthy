import React from "react";
import AwesomeSlider from "react-awesome-slider";
// import AwsSliderStyles from "react-awesome-slider/src/styles.scss";

const Slider = () => {
  return (
    <>
      <AwesomeSlider>
        <div data-src="http://placehold.it/1900x1080" />
        <div data-src="http://placehold.it/1900x1080" />
        <div data-src="http://placehold.it/1900x1080" />
      </AwesomeSlider>
    </>
  );
};

export default Slider;
