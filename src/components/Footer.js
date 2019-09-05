import React from "react";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.linkedin.com/in/elizabethlemk"
          >
            <i className="fab fa-linkedin" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.github.com/elizabethlemk"
          >
            <i className="fab fa-github" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.medium.com/@elizabethlemk"
          >
            <i className="fab fa-medium-m" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.twitter.com/elizabethlemk"
          >
            <i className="fab fa-twitter" />
          </a>
        </li>
      </ul>
      <span>&#169; 2019 Elizabeth Le</span>
    </div>
  );
};

export default Footer;
