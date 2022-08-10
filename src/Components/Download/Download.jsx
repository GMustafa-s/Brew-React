import React from "react";
import '../Download/Download.css'
import '../Responsive/Resposive.css'
import phone from '../../Images/08 download section/phone.png'
import left from '../../Images/08 download section/left.png'
import right from '../../Images/08 download section/right.png'
import blur from '../../Images/08 download section/blur.png'

const Download = () => {
  return (
    <React.Fragment>
      <section className="downloads">
        <div className="container download-container">
          <div className="feature-top download-top">
            <span className="numbering feature-numbering">
              08
              <hr />
              08
            </span>
            <h2 className="secondary-title feature-tittle">
              Download the crypto wallet of the future, today.
            </h2>
          </div>
          <div className="download-btns">
            <button className="btns future-btn download">
              <div className="applee">
                <ion-icon name="logo-apple" className="apple color"></ion-icon>
              </div>
              Download for IOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
            <button className="btns future-btn download">
              <div className="applee">
                <ion-icon name="logo-android" className="apple"></ion-icon>
              </div>
              Download for Android
            </button>
          </div>
          <div className="download-img">
            <img
              src={phone}
              alt=""
            />
            <img src={blur} alt="" />
            <img src={right} alt="" />
            <img src={left} alt="" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Download;
