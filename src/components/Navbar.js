import React from "react";

const Navbar = ({ activeItem, handleClick }) => {
  return (
    <div className="nav_wrapper">
      <ul>
        <li
          name="about"
          className={activeItem === "about" ? "active" : ""}
          onClick={() => handleClick("about")}
        >
          about
        </li>
        <li
          name="works"
          className={activeItem === "works" ? "active" : ""}
          onClick={() => handleClick("works")}
        >
          works
        </li>
        <li
          name="resume"
          className={activeItem === "resume" ? "active" : ""}
          onClick={() => handleClick("resume")}
        >
          resume
        </li>
        <li
          name="contact"
          className={activeItem === "contact" ? "active" : ""}
          onClick={() => handleClick("contact")}
        >
          contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
