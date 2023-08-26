import React from "react";
import GeneralTemplate from "../template/general";
import bigman from "../assets/bigman.svg";
import Marque from "../components/marque";
import "../styles/pageStyle/aboutpage.css";

function AboutPage() {
  const texts = [
    {
      text: "Hi, I’m Ridwanullahi (whitecoode). I’m a senior front-end and full-stack developer. I’m passionate about up-and-coming trends and I have a good knowledge of emerging technologies.",
    },
    {
      text: "I am the creator of White-UICSS, a CSS framework that allows developers to build fast and responsive web design. A front-end developer with over 4 years' experience building businesses together with founders as well as large enterprises. My passion is front-end development and I started my journey in development through web design using HTML, CSS, Javascript, Bootstrap, and JQuery.",
    },
    {
      text: "After a lot of projects and experience, I went on to start building SPAs (Single Page Applications) using ReactJS. At the end of 2021, I started my journey into smart-contract and dApps building using Solidity and Hardhat for my production. I am also a software Engineer at Malhub, where I tutor young developers. I have also worked with Medbase, where I built a medical application for hospitals, doctors, and clients. I also work with startups that are not available to be disclosed to the public yet.",
    },
    {
      text: "Are you looking for a remote front-end developer, or are you a startup founder looking for a web developer? Hire me, let’s work together!",
    },
  ];
  return (
    <GeneralTemplate>
      <img src={bigman} alt="" className="aboutImg" />
      <h1 className="aboutHeader">Whitecoode.</h1>
      <div className="aboutpage">
        {texts.map((paragraph, index) => (
          <p key={index}>{paragraph.text}</p>
        ))}
      </div>
      <Marque />
      <hr />
    </GeneralTemplate>
  );
}

export default AboutPage;
