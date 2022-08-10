import React from "react";
import '../07-latest/Latest.css'
import '../Responsive/Resposive.css'

import first from '../../Images/07 latest/1.png'
import second from '../../Images/07 latest/2.png'
import third from '../../Images/07 latest/3.png'
import eth from '../../Images/07 latest/eth.png'
import yaun from '../../Images/07 latest/yuan.png'


const Latest = () => {
  return (
    <React.Fragment>
      <section className="latest">
        <div className="container latest-container">
          <div className="about-left">
            <span className="numbering">
              07
              <hr />
              08
            </span>
            <h2 className="secondary-title security-tittle">Latest resources</h2>
          </div>
          <div className="latest-cards">
            <div className="latest-card">
              <div className="latest-imges">
                <img src={first} alt="" />
              </div>
              <div className="latest-detail">
                <div className="latest-date">
                  <span>Apps</span>
                  <hr />
                  <span>Mar 5, 2022</span>
                </div>
                <h2 className="latest-heading">
                  Best platform to trade BTC on your phone
                </h2>
                <span>Read more</span>
              </div>
            </div>
            <div className="latest-card">
              <div className="latest-imges">
                <img src={third} alt="" />
                <img
                  src={second}
                  alt=""
                  className="latest-2"
                />
              </div>
              <div className="latest-detail">
                <div className="latest-date">
                  <span>Apps</span>
                  <hr />
                  <span>April 20, 2022</span>
                </div>
                <h2 className="latest-heading">
                  What is the best and most secure wallet?
                </h2>
                <span >Read more</span>
              </div>
            </div>
            <div className="latest-card">
              <div className="latest-imges">
                <img
                  src={third}
                  alt=""
                  className="latest-11"
                />
                <img
                  src={eth}
                  alt=""
                  className="latest-3"
                />
                <img
                  src={yaun}
                  alt=""
                  className="latest-4"
                />
              </div>
              <div className="latest-detail last-detail-margin">
                <div className="latest-date">
                  <span>Apps</span>
                  <hr />
                  <span>May 9, 2022</span>
                </div>
                <h2 className="latest-heading">
                  5 great crypto apps you should know
                </h2>
                <span>Read more</span>
              </div>
            </div>
          </div>
          <div className="latest-btns">
            <button className="btns latest-btn">Browse more Posts</button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Latest;
