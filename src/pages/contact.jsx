import React from "react";
import Navbar from "../components/navbar";
import "../styles/pageStyle/contact.css";
import camera from "../assets/camera.svg";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact">
      <Navbar />
      <div className="image">
        <img src={camera} alt="" />
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
      <h1>Contact Me</h1>
    </div>
  );
}

export default Contact;
