import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function GeneralTemplate({ children }) {
  return (
    <div className="general">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default GeneralTemplate;
