import React from "react";

const Works = () => {
  return (
    <div className="works wrapper" data-aos="fade-up">
      <div className="project_wrapper" data-aos="fade-down">
        <div className="project_img">
          <a
            href="http://www.dooznyc.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://i.imgur.com/TwpZwcU.png" alt="dooz" />
          </a>
        </div>
        <div className="description">
          <h1>Dooz</h1>
          <span>
            <a
              href="http://www.dooznyc.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </span>
          <p>
            Custom Shopify theme for e-commerce site <br />
            <strong>Built with:</strong> JQuery, HTML/CSS
          </p>
        </div>
      </div>
      <div className="project_wrapper" data-aos="fade-down">
        <div className="description">
          <h1>Walkpop</h1>
          <span>
            <a
              href="http://www.walkpop.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </span>
          <p>
            Custom Shopify theme for e-commerce site <br />{" "}
            <strong>Built with:</strong> JQuery, HTML/CSS
          </p>
        </div>
        <div className="project_img">
          <a
            href="http://www.walkpop.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://i.imgur.com/6YiyrAY.png" alt="walkpop" />
          </a>
        </div>
      </div>
      <div className="project_wrapper" data-aos="fade-down">
        <div>
          <a
            href="https://www.youtube.com/watch?v=dg2nIqLr84M"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://i.imgur.com/R9RL8Zm.gif" alt="project book" />
          </a>
        </div>
        <div className="description">
          <h1>Project Book</h1>
          <span>
            <a
              href="https://www.youtube.com/watch?v=dg2nIqLr84M"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/elizabethlemk/project-book-front"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </span>
          <p>
            A website for designers to organize all their notes, images, and
            reference links for creative projects.
            <br /> <strong>Built with:</strong> React & Redux (Front-end), Ruby
            on Rails (Back-end), Semantic UI, AWS S3
          </p>
        </div>
      </div>
      <div className="project_wrapper" data-aos="fade-down">
        <div className="description">
          <h1>Flatiron Ware</h1>
          <span>
            <a
              href="http://flatiron-ware-game.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/elizabethlemk/flatiron-ware-game"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </span>
          <p>
            A fast-paced collections of games inspired by Nintendo's WarioWare
            game. <br />
            <strong>Built with:</strong> Vanilla Javascript, HTML/CSS, Ruby on
            Rails(Back-end)
          </p>
        </div>
        <div className="project_img">
          <a
            href="http://flatiron-ware-game.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.imgur.com/ow6OMc8.png"
              alt="flatiron ware game"
            />
          </a>
        </div>
      </div>
      <div className="project_wrapper" data-aos="fade-down">
        <div className="project_img">
          <a
            href="http://the-jelly-club.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://i.imgur.com/H5DHGua.png" alt="the jelly club" />
          </a>
        </div>
        <div className="description">
          <h1>The Jelly Club</h1>
          <span>
            <a
              href="http://the-jelly-club.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/elizabethlemk/the-jelly-club"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </span>
          <p>
            A website for Jelly Club members to share keep track of the club
            inventory, share recipes, and reviews member creations. <br />
            <strong>Built with:</strong> Ruby on Rails
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;
