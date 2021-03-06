import React from "react";

const About = () => {
  return (
    <div className="about wrapper" data-aos="fade-up">
      <div className="img_wrapper">
        <img
          src="https://i.imgur.com/4Y3dLBk.png"
          alt="profile"
          data-aos="fade-down"
          data-aos-duration="1500"
        />
        <div className="about_text">
          <div data-aos="fade-left" data-aos-duration="1500">
            <h2>Background</h2>
            <p>
              Born and raised in Orange County, CA. In my final year of getting
              my B.A. in Fashion Design, I was already looking for a career
              change. After graduating, I attended Flatiron School in Brooklyn,
              NY and the rest is history! I've worked on websites for Adore Me,
              Dooz NYC, Andbox, Splits59, and more.
            </p>
          </div>
          <div data-aos="fade-right" data-aos-duration="1500">
            <h2>Skills</h2>
            <p>
              React, Redux, JavaScript, Node.js, Ruby on Rails, Shopify/Liquid,
              CSS, HTML, Illustrator, Photoshop, PostgreSQL, AWS S3
            </p>
          </div>
        </div>
      </div>
      <div className="about_wrapper">
        <div
          className="about_text"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <h2 data-aos="fade-down" data-aos-duration="1500">
            Education
          </h2>
          <ul>
            <li>
              <ul data-aos="fade-left" data-aos-duration="1500">
                <h3>Flatiron School </h3>
                January - April 2019
                <li>Brooklyn, NY</li>
                <li>Immersive 15 weeks program full stack development</li>
              </ul>
            </li>
            <br />
            <li>
              <ul data-aos="fade-right" data-aos-duration="1500">
                <h3>California State University Long Beach</h3>
                2015-2018
                <li>Long Beach, CA</li>
                <li>B.A. in Fashion Design</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <img
            src="https://i.imgur.com/qdRFa1z.png"
            alt="profile2"
            data-aos="fade-down"
            data-aos-duration="1500"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
