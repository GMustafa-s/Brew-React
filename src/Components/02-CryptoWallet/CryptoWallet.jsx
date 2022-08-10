import React from "react";
import "../02-CryptoWallet/CryptoWallet.css";
import '../Responsive/Resposive.css'
import { BsCheck2 } from 'react-icons/bs' ;
import phone from '../../Images/02 crypto wallet/phone.png'
import small from '../../Images/02 crypto wallet/small.png'

const CryptoWallet = () => {
  return (
    <React.Fragment>
      <section className="crypto-wallet">
        <div className="container wallet-container">
          <div className="wallet-left">
            <span className="numbering">
              02
              <hr />
              08
            </span>
            <h2 className="secondary-title wallet-tittle">
              A crypto wallet from the future
            </h2>
            <p className="secondary-dec wallet-dec">
              Get the latest updates and functionalities using Breew wallet as
              your primary source of holding crypto.
            </p>
            <ul className="wallet-lists">
              <li className="wallet-list">
                <div className="wallet-icons">
                <BsCheck2 className="new-icon"/>
                </div>
                <div className="wallet-list-dec">
                  Lowest rates in the market
                </div>
              </li>
              <li className="wallet-list">
                <div className="wallet-icons">
                  <BsCheck2 className="new-icon"/>
                </div>
                <div className="wallet-list-dec">
                  Safe and speedy transactions
                </div>
              </li>
              <li className="wallet-list">
                <div className="wallet-icons">
                <BsCheck2 className="new-icon"/>
                </div>
                <div className="wallet-list-dec">256-bit secure encryption</div>
              </li>
            </ul>
          </div>
          <div className="wallet-right">
            <img
              src={phone}
              alt=""
            />
            <img src={small} alt="" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CryptoWallet;
