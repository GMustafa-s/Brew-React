import React from 'react'
import '../04-future/Future.css'
import '../Responsive/Resposive.css'
import phone from '../../Images/04 Future wallet/phone.png'

const Future = () => {
  return (
    <React.Fragment>
      
    <section class="future-wallet" id="get-app">
      <div class="container futurer-container">
        <div class="container-background">
          <div class="future-left">
            <h1 class="secondary-title future-tittle">
              Try the crypto wallet of the future, today
            </h1>
            <div class="future-wallet-btn reponsive">
              <button class="btns future-btn reponsivee">
                <div class="applee">
                  <ion-icon name="logo-apple" class="apple"></ion-icon>
                </div>
                Download for IOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </button>
              <button class="btns future-btn reponsivee">
                <div class="applee">
                  <ion-icon name="logo-android" class="apple"></ion-icon>
                </div>
                Download for Android
              </button>
            </div>
          </div>
          <div class="future-right">
            <img src={phone} alt="" />
          </div>
        </div>
      </div>
    </section>
    </React.Fragment>
  )
}

export default Future
