import React from "react";
import Slider from '../components/Slider'

const About = () => {
  return (
    <div className="container">
      <h2 className="aboutHeading">About This Application</h2>
      <p className="aboutDescription"> THIS IS NOT A REAL WEBSITE! Unfortunately products can not be purchaced from this E-Commerce website is only a MOCK website.
    The real one can be found at <a className="aboutLink" href="https://www.shuks.com.au/"> --Click Here-- </a>
      This Website is purely for an assignment for my university course. </p>
      <Slider />
    </div>
  );
};

export default About;