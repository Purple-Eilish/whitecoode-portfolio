import React from "react";
import bigman from "../assets/bigman.svg";
import arrow from "../assets/arrow.svg";
import "../styles/componentStyle/about.css";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="about" id="about">
      <img src={bigman} alt="" />
      <div className="site">
        <p>
          Hi there! I’m Ridwan but my friends call me Whitecoode, I'm a creative{" "}
          <br />
          developer with over 3 years of experience. I enjoy tutoring beginners
          in <br /> coding, helping them unleash their potential. In my leisure
          time, you'll find <br /> me indulging in anime, exploring captivating
          worlds and stories. Let's <br /> embark on a coding adventure together
          and bring your ideas to life!
        </p>
        <div className="view">
          <Link to="/about">View live site</Link>
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
