import React, { useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";

import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Works";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

const App = () => {
  const [activeItem, setActive] = useState("home");

  console.log(activeItem);
  return (
    <React.Fragment>
      <Logo />
      <Navbar activeItem={activeItem} setActive={setActive} />
      <Switch>
        <Route exact path="/home" render={() => <Home />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/works" render={() => <Works />} />
        <Route exact path="/resume" render={() => <Resume />} />
        <Route exact path="/contact" render={() => <Contact />} />
      </Switch>
    </React.Fragment>
  );
};

export default withRouter(App);
