import React, { useState } from "react";
import logo from "../../images/bloghubLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faTimes,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img className="logo projectsArea" src={logo} alt="" />
        </Link>
        <button
          onClick={handleClick}
          className="navbar-toggler projectsArea"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {click ? (
            <FontAwesomeIcon icon={faTimes} style={{ color: "#fff" }} />
          ) : (
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
          )}
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/home" className="nav-link">
                <FontAwesomeIcon icon={faHome} className="checkFontIcon" />
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-link">
                <FontAwesomeIcon
                  icon={faUserLock}
                  className="checkFontIcon"
                />
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
