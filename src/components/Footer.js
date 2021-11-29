import React from "react";
import { Github } from "react-bootstrap-icons";
import { Google } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import LinkResume from "../pic/CAROLINA REEDY resume.pdf";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="row align-items-start">
            <div className="col ">
              <a
                href="https://github.com/carinvid"
                target="_blank"
                rel="noreferrer"
              >
                <Github />
              </a>
            </div>
            <div className="col">
              <a
                href="mailto:carinvid@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <Google />
              </a>
            </div>
            <div className="col ">
              <a
                href="https://www.linkedin.com/in/carolina-reedy-1a2b1020a/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin />
              </a>
            </div>
            <div className="col">
              <a href={LinkResume} target="_blank" rel="noreferrer">
                View my Résumé
              </a>
            </div>
          </div>
        </div>

        <p className="pt-3 text-center">
          Copyright&copy; {new Date().getFullYear()}&nbsp; Carolina Reedy
          Portfolio | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
