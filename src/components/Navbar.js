import React from "react";
import { withRouter } from "react-router-dom";

const Navbar = ({ activeItem, setActive, props }) => {
  const handleClick = name => {
    setActive(name);
    props.history.push(`/${name}`);
  };

  return (
    <div className="nav_wrapper">
      <ul>
        <li
          name="home"
          className={activeItem === "home" ? "active" : ""}
          onClick={() => handleClick("home")}
        >
          Home
        </li>
        <li
          name="about"
          className={activeItem === "about" ? "active" : ""}
          onClick={() => handleClick("about")}
        >
          About
        </li>
        <li
          name="works"
          className={activeItem === "works" ? "active" : ""}
          onClick={() => handleClick("works")}
        >
          Works
        </li>
        <li
          name="resume"
          className={activeItem === "resume" ? "active" : ""}
          onClick={() => handleClick("resume")}
        >
          Resume
        </li>
        <li
          name="contact"
          className={activeItem === "contact" ? "active" : ""}
          onClick={() => handleClick("contact")}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Navbar);
