import React from "react";
import author from "../pic/Carolina.jpg";

const About = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="Carolina Reedy" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About me</h1>
          <p className="description">
            My name is Carolina Reedy. I'm Full-Stack Developer. Highly
            positive, flexible, innovative and enthusiastic. Associate’s in
            Software Development, Bachelors in Computer science. An analytical
            bent of mind, Good time management of mind. Curiosity of learning,
            Attention to detail. Creative Vision, patience. I love technology,
            art and design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
