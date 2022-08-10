import React from "react";
import '../05-GetStarted/GetStarted.css'
import '../Responsive/Resposive.css'
import phone from '../../Images/05 Starter/phone.png'
import small from '../../Images/05 Starter/small.png'

const GetStarted = () => {
  return (
    <React.Fragment>
      <section className="starter" id="how-it-works">
        <div className="container starter-container">
          <div className="feature-top start-feature">
            <span className="numbering feature-numbering">
              05
              <hr />
              08
            </span>
            <h2 className="secondary-title feature-tittle">
              Get started with Breew
              <br />
              in 3 easy steps
            </h2>
          </div>
          <div className="start-container">
            <div className="start-left">
              <img src={phone} alt="" />
              <img src={small} alt="" />
            </div>
            <div className="start-right">
              <div className="starter-lists">
                <div className="starter-list">
                  <div className="starter-icon">
                    <svg
                      width="36"
                      height="46"
                      viewBox="0 0 36 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M34.5668 12.7757V34.1673C34.5668 42.724 32.5314 44.8632 24.3898 44.8632H12.1774C4.03577 44.8632 2.00037 42.724 2.00037 34.1673V12.7757C2.00037 4.219 4.03577 2.07983 12.1774 2.07983H24.3898C32.5314 2.07983 34.5668 4.219 34.5668 12.7757Z"
                        stroke="#0582CA"
                        stroke-width="2.23495"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22.3543 9.56689H14.2126"
                        stroke="#0582CA"
                        stroke-width="2.23495"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.2852 38.6595C20.0276 38.6595 21.4401 37.175 21.4401 35.3438C21.4401 33.5126 20.0276 32.0281 18.2852 32.0281C16.5429 32.0281 15.1304 33.5126 15.1304 35.3438C15.1304 37.175 16.5429 38.6595 18.2852 38.6595Z"
                        stroke="#0582CA"
                        stroke-width="2.23495"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="starter-text">
                    <h2 className="starter-title">1. Download the app</h2>
                    <p className="starter-dec">
                      The Breew app is available on apple store and playstore
                      for easy downloads.
                    </p>
                  </div>
                </div>
                <div className="starter-list">
                  <div className="starter-icon">
                    <svg
                      width="43"
                      height="44"
                      viewBox="0 0 43 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="rotate"
                    >
                      <path
                        d="M22.6959 5.02417L22.6424 5.14896L17.4728 17.1461H12.3923C11.1801 17.1461 10.0214 17.3957 8.9696 17.8413L12.0892 10.3899L12.1605 10.2117L12.2853 9.92643C12.321 9.81947 12.3566 9.71251 12.4101 9.62338C14.7454 4.22199 17.3837 2.99197 22.6959 5.02417Z"
                        stroke="#0582CA"
                        stroke-width="2.93611"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M32.3043 17.5026C31.5021 17.253 30.6465 17.1461 29.7908 17.1461H17.4728L22.6424 5.14889L22.6959 5.02411C22.9633 5.11324 23.2129 5.23803 23.4803 5.34498L27.4199 7.00284C29.6126 7.91198 31.1456 8.85678 32.0726 9.99767C32.2509 10.2116 32.3935 10.4077 32.5183 10.6394C32.6787 10.889 32.8035 11.1386 32.8748 11.406C32.9461 11.5664 32.9996 11.7268 33.0352 11.8694C33.5165 13.3669 33.2313 15.203 32.3043 17.5026Z"
                        stroke="#0582CA"
                        stroke-width="2.93611"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M38.4932 25.8458V29.3219C38.4932 29.6784 38.4753 30.035 38.4575 30.3915C38.1188 36.6129 34.6427 39.7503 28.0469 39.7503H14.1423C13.7145 39.7503 13.2866 39.7147 12.8766 39.6612C7.20784 39.2869 4.17735 36.2564 3.803 30.5876C3.74952 30.1776 3.71387 29.7497 3.71387 29.3219V25.8458C3.71387 22.2627 5.88869 19.1787 8.99048 17.8417C10.0601 17.3961 11.201 17.1465 12.4131 17.1465H29.8117C30.6852 17.1465 31.5409 17.2713 32.3252 17.503C35.8727 18.5904 38.4932 21.9061 38.4932 25.8458Z"
                        stroke="#0582CA"
                        stroke-width="2.93611"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.0892 10.3899L8.9696 17.8413C5.86781 19.1783 3.69299 22.2623 3.69299 25.8454V20.6222C3.69299 15.5595 7.29392 11.3347 12.0892 10.3899Z"
                        stroke="#0582CA"
                        stroke-width="2.93611"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M38.4875 20.6214V25.8445C38.4875 21.9227 35.8849 18.5892 32.3196 17.5196C33.2466 15.2022 33.5139 13.3839 33.0683 11.8686C33.0326 11.7082 32.9792 11.5478 32.9079 11.4052C36.2236 13.1165 38.4875 16.6283 38.4875 20.6214Z"
                        stroke="#0582CA"
                        stroke-width="2.93611"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="starter-text">
                    <h2 className="starter-title">1. Create Your Wallet</h2>
                    <p className="starter-dec">
                      Create your Breew wallet with the fastest flow and the
                      most simple layouts.
                    </p>
                  </div>
                </div>

                <div className="starter-list">
                  <div className="starter-icon">
                    <svg
                      width="51"
                      height="51"
                      viewBox="0 0 51 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.125 17.8092H29.0798C31.2866 17.8092 33.0765 19.7953 33.0765 21.8058C33.0765 24.0126 31.2866 25.8025 29.0798 25.8025H19.125V17.8092Z"
                        stroke="#0582CA"
                        stroke-width="3.06"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19.125 25.7778H30.5019C33.0274 25.7778 35.0625 27.5677 35.0625 29.7745C35.0625 31.9812 33.0274 33.7711 30.5019 33.7711H19.125V25.7778Z"
                        stroke="#0582CA"
                        stroke-width="3.06"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M26.0894 33.7467V37.7433"
                        stroke="#0582CA"
                        stroke-width="3.06"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21.1089 33.7467V37.7433"
                        stroke="#0582CA"
                        stroke-width="3.06"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M26.0894 13.8125V17.8091"
                        stroke="#0582CA"
                        stroke-width="3.06"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21.1089 13.8125V17.8091"
                        stroke="#0582CA"
                        stroke-width="3.06"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22.901 17.8092H15.9375"
                        stroke="#0582CA"
                        stroke-width="3.06"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22.901 33.7467H15.9375"
                        stroke="#0582CA"
                        stroke-width="3.06"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M25.5 46.75C37.236 46.75 46.75 37.236 46.75 25.5C46.75 13.7639 37.236 4.25 25.5 4.25C13.7639 4.25 4.25 13.7639 4.25 25.5C4.25 37.236 13.7639 46.75 25.5 46.75Z"
                        stroke="#0582CA"
                        stroke-width="3.06"
                        stroke-miterlimit="10"
                      />
                    </svg>
                  </div>
                  <div className="starter-text">
                    <h2 className="starter-title">3. Buy and trade crypto</h2>
                    <p className="starter-dec">
                      Conduct speedy crypto transactions using the Breew app
                      today.
                    </p>
                  </div>
                </div>
              </div>

              <div className="starter-btns">
                <button className="btn hero-left-btn">Download App</button>
                <button className="btn hero-right-btn">View Pricing</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default GetStarted;
