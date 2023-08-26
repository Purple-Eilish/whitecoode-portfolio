import React from "react";
import man from "../assets/man.svg";
import "../styles/componentStyle/welcome.css";

function Welcome() {
  return (
    <div className="welcome">
      <h1>
        Hello! I’m <br /> Whitecoode.
      </h1>
      <p>
        I AM A PASSIONATE AND CREATIVE FRONT END
        <br /> AND FULL-STACK DEVELOPER. <br /> I BUILD AND DEVELOP PERFECT WEB
        <br /> APP AND MOBILE APPLICATION, AND CONNECT
        <br />
        MY CLIENTS TO THE IDEAL UI/UX DESIGNER.
      </p>
      <div className="scroll">
        <img src={man} alt="" />
        <p>Scroll to Explore</p>
      </div>
    </div>
  );
}

export default Welcome;
