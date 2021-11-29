import React from "react";
import Portfolio from "../pic/Portfolio.jpg";
import Rumble from "../pic/Rumble-on.jpg";
import RunBuddy from "../pic/RunBuddy.jpg";
import Screenshot from "../pic/Screenshot.png";
import TeamGenerator from "../pic/team-generator.png";
import NoteTaker from "../pic/note-taker.png";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Projects = () => {
  //HTML,CSS Portfolio
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img className="pro-img-popupbox" src={Portfolio} alt="Portfolio" />
        <p>
          A website that contains information about me and professional
          portfolios.
          <p>Built with HTML, CSS and Javascript</p>
        </p>
        <b>GitHub:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/carinvid/Carolina.Reedy")
          }
        >
          https://github.com/carinvid/Carolina.Reedy
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "Javascript Portfolio.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  //Rumble
  const openPopupboxRumble = () => {
    const content = (
      <>
        <img className="pro-img-popupbox" src={Rumble} alt="Rumble-On" />
        <p>
          Ramble On is an application that connects travel enthusiasts with
          reviews on anything travel related.
          <p>This was a Team Project.Built with NodeJS, mySQL.</p>
        </p>
        <b>GitHub:</b>
        <a
          className="hyper-link"
          onClick={() => window.open("https://github.com/asa-grace/ramble-on")}
        >
          https://github.com/asa-grace/ramble-on
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigRumble = {
    titleBar: {
      enable: true,
      text: "Rumble-On Website.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  //RunBuddy
  const openPopupboxRunBuddy = () => {
    const content = (
      <>
        <img
          className="pro-img-popupbox"
          src={RunBuddy}
          alt="RunBuddy Website"
        />
        <p>
          A website that contains information about me and professional
          portfolios.<p>Built with HTML, CSS and Javascript</p>
        </p>
        <b>GitHub:</b>
        <a
          className="hyper-link"
          onClick={() => window.open("https://github.com/carinvid/RunBuddy")}
        >
          https://github.com/carinvid/RunBuddy
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigRunBuddy = {
    titleBar: {
      enable: true,
      text: "RunBuddy Website.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  //Discover Companions Website
  const openPopupboxDiscover = () => {
    const content = (
      <>
        <img
          className="pro-img-popupbox"
          src={Screenshot}
          alt="Discover Companions Website"
        />
        <p>
          An application designed to help people find pets and to find animals a
          loving home.
          <p>
            Built With HTML, CSS, JavaScript, Jquery, Bootstrap, Materilizie.
            This was a Team Project.
          </p>
        </p>
        <b>GitHub:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/JuanHernandez96/Project-1")
          }
        >
          https://github.com/JuanHernandez96/Project-1
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigDiscover = {
    titleBar: {
      enable: true,
      text: "Discover Companions Website.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  //TeamGenerator
  const openPopupboxTeamGenerator = () => {
    const content = (
      <>
        <img
          className="pro-img-popupbox"
          src={TeamGenerator}
          alt="TeamGenerator app"
        />
        <p>
          This application will generate a HTML page with the members of your
          team.
          <p>Built with OOP, Node, & ES6.</p>
        </p>
        <b>GitHub:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/carinvid/team-page-generator")
          }
        >
          https://github.com/carinvid/team-page-generator
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigTeamGenerator = {
    titleBar: {
      enable: true,
      text: "TeamGenerator App.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  //NoteTaker
  const openPopupboxNoteTaker = () => {
    const content = (
      <>
        <img
          className="pro-img-popupbox"
          src={NoteTaker}
          alt="Note-Taker App"
        />
        <p>
          This application will allow to take notes, save and or delete
          them.This application uses
          <p>
            Express backend to save and retieve notes from JSON file.Nodejs,
            Express.
          </p>
        </p>
        <b>GitHub:</b>
        <a
          className="hyper-link"
          onClick={() => window.open("https://github.com/carinvid/note-taker")}
        >
          https://github.com/carinvid/note-taker
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigNoteTaker = {
    titleBar: {
      enable: true,
      text: "Note-Taker App.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="projects" className="pro-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center">projects</h1>
        <div className="row">
          <div class="col-md-4">
            <div className="pro-image-box" onClick={openPopupboxPortfolio}>
              <img className="port-img" src={Portfolio} alt="My Portfolio" />
              <div className="overflow"></div>
            </div>
          </div>
          <div class="col-md-4">
            <div className="pro-image-box" onClick={openPopupboxRumble}>
              <img className="port-img" src={Rumble} alt="Rumble-on Project" />
              <div className="overflow"></div>
            </div>
          </div>
          <div class="col-md-4">
            <div className="pro-image-box" onClick={openPopupboxRunBuddy}>
              <img className="port-img" src={RunBuddy} alt="RunBuddy Project" />
              <div className="overflow"></div>
            </div>
          </div>
          <div class="col-md-4">
            <div className="pro-image-box " onClick={openPopupboxDiscover}>
              <img
                className="port-img"
                src={Screenshot}
                alt="Discovery Companions Projects"
              />
              <div className="overflow"></div>
            </div>
          </div>
          <div class="col-md-4">
            <div className="pro-image-box" onClick={openPopupboxTeamGenerator}>
              <img
                className="port-img"
                src={TeamGenerator}
                alt="Team-Generator Project"
              />
              <div className="overflow"></div>
            </div>
          </div>
          <div class="col-md-4">
            <div className="pro-image-box" onClick={openPopupboxNoteTaker}>
              <img
                className="port-img"
                src={NoteTaker}
                alt="Note-taker Project"
              />
              <div className="overflow"></div>
            </div>
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigPortfolio} />
      <PopupboxContainer {...popupboxConfigRumble} />
      <PopupboxContainer {...popupboxConfigRunBuddy} />
      <PopupboxContainer {...popupboxConfigDiscover} />
      <PopupboxContainer {...popupboxConfigTeamGenerator} />
      <PopupboxContainer {...popupboxConfigNoteTaker} />
    </div>
  );
};

export default Projects;
