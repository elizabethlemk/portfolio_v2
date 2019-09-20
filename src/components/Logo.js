import React from "react";

const Logo = ({ activeItem, handleClick }) => {
  return (
    <div className="logo_wrapper">
      <h1 name="home" className="logo" onClick={() => handleClick("home")}>
        Elizabeth Le
      </h1>
    </div>
  );
};

export default Logo;
