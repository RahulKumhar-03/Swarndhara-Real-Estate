import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <section className="gt-wrapper">
      <div className="innerWidth paddings gt-container">
        <div className="inner-container flexColCenter">
          <span className="primaryText">Get started with Swarndhara</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residency soon
          </span>
          <button className="button">
            <a href="mailto:sskorean980@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
