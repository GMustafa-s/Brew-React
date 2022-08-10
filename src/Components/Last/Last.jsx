import React from 'react'
import '../Last/Last.css'
import '../Responsive/Resposive.css'

const Last = () => {
  return (
   <React.Fragment>
    <section class="last">
      <div class="container lat-container">
        <div class="last-left">
          <h2>Breew</h2>
          <p>
            Breew gives you the opportunity to buy rapidly growing crypto
            currencies from your phone.
          </p>
        </div>
        <div class="last-right">
          <button class="btns future-btn lasts">
            <div class="applee">
              <ion-icon name="logo-apple" class="apple applee"></ion-icon>
            </div>
            Download for IOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </button>
          <button class="btns future-btn lasts">
            <div class="applee">
              <ion-icon name="logo-android" class="apple"></ion-icon>
            </div>
            Download for Android
          </button>
        </div>
      </div>
    </section>
   </React.Fragment>
  )
}

export default Last
