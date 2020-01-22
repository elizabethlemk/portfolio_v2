import React from "react";

const allWorks = [
  {
    name: "Joyja",
    github: null,
    link: "http://www.joyja.com",
    image: "https://i.imgur.com/yvKNPuq.png",
    description:
      "Custom Shopify theme created closely with a UI/UX designer. Implemented cross-browser compatibility, SEO, and UX best-practices to preserve life of the code.",
    tech: "JQuery, Javascript, HTML/CSS, Liquid"
  },
  {
    name: "Andbox",
    github: null,
    link: "http://www.shop.andbox.com",
    image: "https://i.imgur.com/CrQQdNj.png",
    description:
      "Built custom sections for a landing page guided by UX designs, added auto-complete search bar, fixed issues with swatches in PDP, and added more customization to existing Shopify sections.",
    tech: "JQuery, Javascript, HTML/CSS, Liquid"
  },
  {
    name: "Walkpop",
    github: null,
    link: "http://www.walkpop.com",
    image: "https://i.imgur.com/6YiyrAY.png",
    description:
      "Custom Shopify theme for e-commerce site. Integrated website with third-party apps like Adore Me’s Catalog, Klaviyo, Yotpo, and Nosto.",
    tech: "JQuery, Javascript, HTML/CSS, Liquid"
  },
  {
    name: "Dooz NYC",
    github: null,
    link: "http://www.dooznyc.com",
    image: "https://i.imgur.com/TwpZwcU.png",
    description:
      "Developed a full-build website based on a pre-existing theme with Shopify's customizable sections. Refactored existing verbose and redundant sections using DRY method to consolidate code",
    tech: "JQuery, Javascript, HTML/CSS, Liquid"
  },
  {
    name: "Project Book",
    github: "https://github.com/elizabethlemk/project-book-front",
    link: "https://www.youtube.com/watch?v=dg2nIqLr84M",
    image: "https://i.imgur.com/R9RL8Zm.gif",
    description:
      "CA website for designers to organize all their notes, images, and reference links for creative projects.",
    tech:
      "React & Redux, HTML/CSS, Semantic UI (Front-end), Ruby on Rails (Back-end), AWS S3"
  },
  {
    name: "Flatiron Ware Game",
    github: "https://github.com/elizabethlemk/flatiron-ware-game",
    link: "http://flatiron-ware-game.herokuapp.com/",
    image: "https://i.imgur.com/ow6OMc8.png",
    description:
      "A fast-paced collections of games inspired by Nintendo's WarioWare game.",
    tech: "Vanilla Javascript, HTML/CSS (Front-end), Ruby on Rails (Back-end)"
  },
  {
    name: "The Jelly Club",
    github: "https://github.com/elizabethlemk/the-jelly-club",
    link: "http://the-jelly-club.herokuapp.com/",
    image: "https://i.imgur.com/H5DHGua.png",
    description:
      "A website for Jelly Club members to share keep track of the club inventory, share recipes, and reviews member creations.",
    tech: "Ruby on Rails"
  }
];

const Works = () => {
  return (
    <div className="works wrapper" data-aos="fade-up">
      {allWorks.map((work, index) => (
        <div
          className="project_wrapper"
          data-aos={index % 2 ? "fade-left" : "fade-right"}
          data-aos-duration="1500"
          key={index}
        >
          <div className="project_img">
            <a href={work.link} target="_blank" rel="noopener noreferrer">
              <img src={work.image} alt={work.name} />
            </a>
          </div>
          <div className="description">
            <h2>{work.name}</h2>
            <span>
              <a href={work.link} target="_blank" rel="noopener noreferrer">
                Website
              </a>{" "}
              {work.github ? (
                <>
                  |{" "}
                  <a
                    href={work.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Github{" "}
                  </a>
                </>
              ) : null}
            </span>
            <p>
              {work.description}
              <br />
              <strong>Built with:</strong> {work.tech}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Works;
