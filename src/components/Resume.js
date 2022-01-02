import React from "react";

const Resume = () => {
  return (
    <div id="resume" className="education">
      <div className="d-flex justify-content-center my-5">
        <h1>education</h1>
      </div>
      <div className="container edu-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="school"></div>
          <div className="timeline-content">
            <h4>2021</h4>
            <p>University of Utah - BootCamp : FULL STACK DEVELOPMENT</p>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="school"></div>
          <div className="timeline-content">
            <h4>2016-2019</h4>
            <p>
              Stevens Henager College : Bachelor's Degree in COMPUTER SCIENCE
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="school"></div>
          <div className="timeline-content">
            <h4>2014-2016</h4>
            <p>
              ITT Technical School: Associate's degree Software Development{" "}
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="school"></div>
          <div className="timeline-content">
            <h4>2022</h4>
            <p>Java and Phyton at Udemy.com </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
