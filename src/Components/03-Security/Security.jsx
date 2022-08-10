import React from "react";
import '../03-Security/Security.css'
import '../Responsive/Resposive.css'
import phone from '../../Images/03 secutity wallet/phone.png'
import small from '../../Images/03 secutity wallet/small.png'

const Security = () => {
  return (
    <React.Fragment>
      <section className="wallet-security">
        <div className="container secutity-container">
          <div className="security-left">
            <img
              src={phone}
              alt=""
            />
            <div>
              <img
                src={small}
                alt=""
              />
            </div>
          </div>
          <div className="secutity-right">
            <span className="numbering">
              03
              <hr />
              08
            </span>
            <h2 className="secondary-title security-tittle">
              Bullet proof
              <br />
              security by design
            </h2>
            <p className="secondary-dec security-dec">
              Get the latest updates and functionalities using Breew wallet as
              your primary source of holding crypto.
            </p>
            <div className="security-cards">
              <div className="security-card">
                <span className="S-card-heading">0</span>
                <p className="S-card-dec">Security incidents</p>
              </div>
              <div className="security-card">
                <span className="S-card-heading">256 bits</span>
                <p className="S-card-dec">AES encryption</p>
              </div>
              <div className="security-card">
                <span className="S-card-heading">100%</span>
                <p className="S-card-dec">Encrypted Data</p>
              </div>
              <div className="security-card">
                <span className="S-card-heading">CISA+</span>
                <p className="S-card-dec">Security Certification</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Security;
