import React from "react";
import Typist from "react-typist";

const Home = () => {
  return (
    <React.Fragment>
      <div className="homepage wrapper">
        <Typist cursor={{ show: false }}>
          <p>I'm a full stack developer.</p>
          <Typist.Delay ms={500} />
          <br />
          <p>I build websites.</p>
          <Typist.Delay ms={500} />
          <br />
          <p>Take a look at my work. </p>
        </Typist>
      </div>
    </React.Fragment>
  );
};

export default Home;
