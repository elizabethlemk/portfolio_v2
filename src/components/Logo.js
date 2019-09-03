import React from "react";

const Logo = ({ activeItem, handleClick }) => {
  return (
    <div className="logo_wrapper">
      <h1
        name="home"
        className={activeItem === "home" ? "active" : ""}
        onClick={() => handleClick("home")}
      >
        Logo Here
      </h1>
    </div>
  );
};

export default Logo;
