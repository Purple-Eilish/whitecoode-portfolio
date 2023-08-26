import React from "react";
import "../styles/componentStyle/projects.css";
import sirHeritage from "../assets/sirHeritage.svg";
import jewel from "../assets/jewel.svg";
import mishaay from "../assets/mishay.svg";
import arrow from "../assets/arrow.svg";

const work = [
  {
    image: sirHeritage,
    num: "001",
    page: "Landing page",
    title: "SirHeritage",
    text: "Sirheritage store is a fashion store where they sell ready made wears and also offer sewing contracts.",
    site: "View live site",
    link: "https://sirheritage-40dd2.web.app/",
  },
  {
    image: jewel,
    num: "002",
    page: "Landing page",
    title: "H&H Jewels",
    text: "H&H Jewels is a brand established by Husna, with a craving for polished jewelries.",
    site: "View live site",
    id: "reverse",
    link: "https://glitters.vercel.app/",
  },
  {
    image: mishaay,
    num: "003",
    page: "Landing page",
    title: "Mishaay Beads",
    text: "Mishaay Beads is a web application that showcase bead accessories for variety of beads work.",
    site: "View live site",
    link: "https://mishaay-beads.vercel.app/",
  },
];

function Projects() {
  return (
    <div className="project" id="project">
      <h2>Featured Projects</h2>
      <hr style={{ marginTop: "20px" }} />
      <div className="cards">
        {work.map((item, index) => (
          <React.Fragment key={index}>
            <div className="card" id={item.id}>
              <img src={item.image} alt="" />
              <div className="num">
                <p>{item.num}</p>
                <p>{item.page}</p>
              </div>
              <div className="text">
                <div>
                  <h1>{item.title}</h1>
                  <p>{item.text}</p>
                </div>
                <div className="arrow">
                  <a href={item.link} target="_blank">
                    {item.site}
                  </a>
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>
            <hr style={{ marginTop: "20px" }} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Projects;
