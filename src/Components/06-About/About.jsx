import React from "react";
import '../06-About/About.css'
import '../Responsive/Resposive.css'

import one from '../../Images/06 reviews/1.png'
import two from '../../Images/06 reviews/2.png'
import three from '../../Images/06 reviews/3.png'
import four from '../../Images/06 reviews/4.png'

const About = () => {
  return (
    <React.Fragment>
      <section className="about" id="testmonial">
        <div className="container about-container">
          <div className="about-start">
            <div className="about-left">
              <span className="numbering about-number">
                06
                <hr />
                08
              </span>
              <h2 className="secondary-title security-tittle">
                See what people are saying about Breew
              </h2>
            </div>
            <div className="about-right show">
              <button className="btn hero-left-btn">Download App</button>
              <button className="btn hero-right-btn">All Reviews</button>
            </div>
          </div>
          <div className="about-review">
            <div className="reviews">
              <h1>“ Transactions are swift “</h1>
              <p>
                I was skeptical about using it at first, but now I’m happy I
                did. All transactions went through very fast. I am going to be a
                returning user
              </p>
              <div className="reviewers">
                <div className="reviewers-left">
                  <img src={one} alt="" />
                  <div className="review-name">
                    <span>Sandra Lee</span>
                    <span>@sandralee</span>
                  </div>
                </div>
                <div className="reviewers-right">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
              </div>
            </div>
            <div className="reviews">
              <h1>“ Love the easy to use layout “</h1>
              <p>
                As a first time user in crypto, the layout really helped in
                guiding me through my first transaction. It is definitely a
                keeper.
              </p>
              <div className="reviewers">
                <div className="reviewers-left">
                  <img src={two} alt="" />
                  <div className="review-name">
                    <span>Ellie Rose</span>
                    <span>@ellierose</span>
                  </div>
                </div>
                <div className="reviewers-right">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
              </div>
            </div>
            <div className="reviews">
              <h1>“ Extremely cool rates “</h1>
              <p>
                I heard about their low rates but I did’nt believe it until I
                tried selling crypto. I’m looking forward to making more
                transactions.
              </p>
              <div className="reviewers">
                <div className="reviewers-left">
                  <img src={three} alt="" />
                  <div className="review-name">
                    <span>Russ Daniel</span>
                    <span>@russdaniel</span>
                  </div>
                </div>
                <div className="reviewers-right">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
              </div>
            </div>
            <div className="reviews">
              <h1>“ Security measures are nice “</h1>
              <p>
                I love all security authentication measures, they’ve kept me at
                ease during my transactions.I’m looking forward to making more
                transactions.
              </p>
              <div className="reviewers">
                <div className="reviewers-left">
                  <img src={four} alt="" />
                  <div className="review-name">
                    <span>Ying Joe</span>
                    <span>@yingjoe</span>
                  </div>
                </div>
                <div className="reviewers-right">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="about-right hide-moob">
            <button className="btn hero-left-btn">Download App</button>
            <button className="btn hero-right-btn">All Reviews</button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
