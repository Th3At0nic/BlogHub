import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <section className="footer container-fluid">
      <div className="row">
        <div className="col-md-4">
          <span className="text-light projectsArea">
            Design and Developed by{" "}
            <span className="text-credit">Md Rahatul Islam</span>
          </span>
        </div>
        <div className="col-md-4">
          <span className="text-light projectsArea">
            Copyright {new Date().getFullYear()} All Rights Reserved
          </span>
        </div>
        <div className="col-md-4">
          <ul className="footer-icons projectsArea">
            <li className="social-icons">
              <a
                style={{ color: "white" }}
                href="https://www.linkedin.com/in/mdrahatulislam/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon className="icon" icon={faLinkedin} />
              </a>
            </li>
            <li className="social-icons">
              <a
                style={{ color: "white" }}
                href="https://github.com/Th3At0nic"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon className="icon" icon={faGithub} />
              </a>
            </li>
            <li className="social-icons">
              <a
                style={{ color: "white" }}
                href="https://www.instagram.com/m.rahatul_islam/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon className="icon" icon={faInstagram} />
              </a>
            </li>
            <li className="social-icons">
              <a
                style={{ color: "white" }}
                href="https://www.facebook.com/th3at0nic/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon className="icon" icon={faFacebookF} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
