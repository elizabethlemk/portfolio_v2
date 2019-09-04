import React from "react";

const About = () => {
  return (
    <div className="about wrapper" data-aos="fade-up">
      <div className="img_wrapper">
        <img src="https://i.imgur.com/4Y3dLBk.png" alt="profile" />
      </div>
      <div className="about_wrapper">
        <h1 className="about-header">Background</h1>
        <p>
          Born and raised in Orange County, California, I always had a passion
          for the arts since childhood. In college, I channeled my creative
          spirit into a more practical application: fashion design.
          <br /> As much as I adored fashion, I found a passion and love for
          programming. The process in software engineering is extremely similar
          to garment creation in fashion!
        </p>

        <h1 className="about-header">Skills</h1>
        <hr />
        <p>
          React, Redux, JavaScript, Ruby on Rails, PHP, CMS (Wordpress, Shopify)
          <br />
          CSS, HTML, Illustrator, Photoshop, PostgreSQL, AWS S3
        </p>

        <h1 className="about-header">Education</h1>
        <hr />
        <ul>
          <li>
            <ul>
              <h5 className="school">Flatiron School </h5>
              January - April 2019
              <li>Brooklyn, NY</li>
              <li>Immersive 15 weeks program full stack development</li>
            </ul>
          </li>
          <br />
          <li>
            <ul>
              <h5 className="school">California State University Long Beach</h5>
              2015-2018
              <li>Long Beach, CA</li>
              <li>B.A. in Fashion Design</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
