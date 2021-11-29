import React from "react";
import javascript from "../pic/Javascript.png";
import mern from "../pic/MERN.png";
import data from "../pic/data.png";
import laravel from "../pic/laravel.png";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <h1 className="myskills">My Skills</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <h4 className="title">Javascript, HTML, CSS</h4>
              <img className="image" src={javascript} alt="javascript" />
              <p className="des-skills">
                Design plans for the user-facing side of applications, which
                controls look, feel, and function. Understand what is going on
                between front-End and Back-End.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <h4 className="title">MERN</h4>
              <img className="image" src={mern} alt="mern" />
              <p className="des-skills">
                Create a social media app using MongoDB, Express.js and Node.js
                on the back end, and React on the front end, using React Router,
                add GraphQL to fetch by using JSON Web Tokens.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <h4 className="title">Data Storage</h4>
              <img className="image" src={data} alt="javascript" />
              <p className="des-skills">
                Know the relational databases and database store
                inside-out.Using MySQL, AJAX, State Management, ORM. Database
                management,able to design.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <h4 className="title">Laravel Site</h4>
              <img className="image" src={laravel} alt="javascript" />
              <p className="des-skills">
                Leverage the MVC design pattern with Laravel.Implement
                authentication to let users sign into an application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
