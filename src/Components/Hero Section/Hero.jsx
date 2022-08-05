import React from "react";
import "../Hero Section/Hero.css";
import women from '../../Images/Hero/women.png'
import left from '../../Images/Hero/left-blur.png'
import bottom from '../../Images/Hero/bottom.png'
import right from '../../Images/Hero/right.png'

const Hero = () => {
  return (
    <React.Fragment>
      <section className="hero-section" id="home">
        <div className="hero-container">
          <div className="hero-left">
            <h1 className="primary-title hero-title">
              Buy rapidly growing <span className="hero-span">crypto</span>{" "}
              right from your phone
            </h1>
            <p className="primary-dec hero-dec">
              The fastest growing crypto currencies are in high demand for smart
              functionalities. We take care of searching for the next high
              rising crypto for your speedy transactions.
            </p>
            <div className="hero-btn">
              <button className="btn hero-left-btn">Download App</button>
              <button className="btn hero-right-btn">View Pricing</button>
            </div>
          </div>
          <div className="hero-right">
            <img
              src={women}
              alt="phone hold"
              className="phone-hold"
            />
            <img
              src={left}
              alt="left top dollar"
              className="left-blur"
            />
            <img
              src={bottom}
              alt="bottom dollar"
              className="bottom-dollar"
            />
            <img
              src={right}
              alt="right top dollar"
              className="right-dollar"
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
