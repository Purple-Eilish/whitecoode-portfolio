import React from "react";
import About from "../components/about";
import Projects from "../components/projects";
import Welcome from "../components/welcome";
import GeneralTemplate from "../template/general";
import Marque from "../components/marque";

function Home() {
  return (
    <GeneralTemplate>
      <Welcome />
      <About />
      <Projects />
      <Marque />
    </GeneralTemplate>
  );
}

export default Home;
