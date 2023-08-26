import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <h1>Whitecoode.</h1>
      <div className="curr">
        <ul>
          <li>
            <a href="/#project">PROJECTS</a>
          </li>
          <li>
            <a href="/#about">ABOUT</a>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="">LINKEDIN</Link>
          </li>
          <li>
            <Link to="https://github.com/ibnyahyah " target="_blank">
              GITHUB
            </Link>
          </li>
          <li>
            <Link to="https://twitter.com/ibnyahyah" target="_blank">
              TWITTER
            </Link>
          </li>
          <li>
            <Link to="mailto:contact@whitecoode.com" target="_blank">
              EMAIL
            </Link>
          </li>
        </ul>
      </div>
      <hr />
      <p>© Whitecoode 2023. All rights reserved</p>
    </div>
  );
}

export default Footer;
