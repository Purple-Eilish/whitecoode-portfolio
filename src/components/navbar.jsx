import React from "react";
import "../styles/componentStyle/nav_footer.css";
import { Link } from "react-router-dom";
import hamburger from "../assets/hamburger.svg";

function Navbar() {
  const [active, setActive] = React.useState(false);
  const ToggleActive = () => {
    setActive((prev) => !prev);
    if (!active) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100dvh";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }
    console.log(active);
  };
  return (
    <>
      <div className="navbar">
        <div className="name">
          <img src={hamburger} onClick={ToggleActive} />
          <h3>
            <Link to="/">Whitecoode.</Link>
          </h3>
        </div>
        <div className="info">
          <a href="/#project">PROJECTS</a>
          <a href="/#about">ABOUT</a>
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
      {/* Toggle menu */}
      <div className={`toggle ${active ? "active" : ""}`}>
        <div className="name">
          <h3>Whitecoode.</h3>
          <h3
            style={{ cursor: "pointer" }}
            className="close"
            onClick={ToggleActive}
          >
            Close
          </h3>
        </div>
        <div className="pageItem">
          <div className="page">
            <h3>
              <span>(1)</span>
              <a href="/#project">Projects</a>
            </h3>
            <h3>
              <a href="/#about">About</a> <span>(2)</span>
            </h3>
            <h3>
              <span>(3)</span>
              <Link to="/contact">Contact</Link>
            </h3>
          </div>
        </div>
        <p>Available for freelance and full-time role</p>
      </div>
    </>
  );
}

export default Navbar;
