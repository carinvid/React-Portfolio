import React from "react";
import Typed from "react-typed";
import LinkResume from "../pic/CAROLINA REEDY resume.pdf";

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h1>Full Stack developer</h1>
        <Typed
          className="typed-text"
          strings={["About me", "Projects", "Skills", "Contact me"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <div className="btn-list">
          <a href={LinkResume} className="btn-contact">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
