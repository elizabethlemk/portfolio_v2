import React from "react";

const About = () => {
  return (
    <div className="about wrapper" data-aos="fade-up">
      <div className="img_wrapper">
        <img
          src="https://i.imgur.com/4Y3dLBk.png"
          alt="profile"
          data-aos="fade-down"
        />
        <div className="about_text" data-aos="fade-down">
          <div data-aos="fade-down">
            <h2>Background</h2>
            <p>
              Born and raised in Orange County, California, I always had a
              passion for the arts since childhood. In college, I channeled my
              creative spirit into a more practical application: fashion design.
              <br /> As much as I adored fashion, I found a passion and love for
              programming. The process in software engineering is extremely
              similar to garment creation in fashion!
            </p>
          </div>
          <div data-aos="fade-down">
            <h2>Skills</h2>
            <p>
              React, Redux, JavaScript, Node.js, Ruby on Rails, PHP, CMS
              (Wordpress, Shopify)
              <br />
              CSS, HTML, Illustrator, Photoshop, PostgreSQL, AWS S3
            </p>
          </div>
        </div>
      </div>
      <div className="about_wrapper">
        <div className="about_text" data-aos="fade-down">
          <h2>Education</h2>
          <ul>
            <li>
              <ul data-aos="fade-down">
                <h3>Flatiron School </h3>
                January - April 2019
                <li>Brooklyn, NY</li>
                <li>Immersive 15 weeks program full stack development</li>
              </ul>
            </li>
            <br />
            <li>
              <ul data-aos="fade-down">
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
          />
        </div>
      </div>
    </div>
  );
};

export default About;
