import React from "react";

const Logo = ({ activeItem, handleClick }) => {
  console.log("🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀");
  console.log("🦀🦀🦀  Welcome to 🦀🦀🦀");
  console.log("🦀🦀🦀🦀the crab 🦀🦀🦀🦀");
  console.log("🦀🦀🦀  P A R T Y  🦀🦀🦀");
  console.log("🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀");
  return (
    <div className="logo_wrapper">
      <h1 name="home" className="logo" onClick={() => handleClick("home")}>
        Elizabeth Le
      </h1>
    </div>
  );
};

export default Logo;
