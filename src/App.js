import React, { useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Works";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function konami(callback) {
  let kkeys = [];
  // up,up,down,down,left,right,left,right,B,A
  const konami = "38,38,40,40,37,39,37,39,66,65";
  return event => {
    kkeys.push(event.keyCode);
    if (kkeys.toString().indexOf(konami) >= 0) {
      callback();
      kkeys = [];
    }
  };
}
const handler = konami(() => {
  console.log("konami 1");
});

window.addEventListener("keydown", handler);

const App = props => {
  const [activeItem, setActive] = useState("home");
  const handleClick = name => {
    setActive(name);
    if (name === "home") {
      props.history.push(`/`);
    } else {
      props.history.push(`/${name}`);
    }
  };

  AOS.init();
  return (
    <React.Fragment>
      // <canvas id="confetti"></canvas>
      <div className="main-content">
        <Logo activeItem={activeItem} handleClick={handleClick} />
        <Navbar activeItem={activeItem} handleClick={handleClick} />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/works" render={() => <Works />} />
          <Route exact path="/resume" render={() => <Resume />} />
          <Route exact path="/contact" render={() => <Contact />} />
        </Switch>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default withRouter(App);
