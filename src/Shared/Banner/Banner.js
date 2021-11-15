import React from "react";
import pstuLogo from "../../images/pstulogo.png";
import "./Banner.css";
const Banner = () => {
  return (
    <section className="title">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-column flex-md-row ms-md-2 align-items-md-center align-items-center">
            <div className="logo">
              <img src={pstuLogo} alt="" width="180" />
            </div>
            <div className="title-tag ms-md-4">
              <h1>Post Graduate Studies</h1>
              <h2>Patuakhali Science And Technology University</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
