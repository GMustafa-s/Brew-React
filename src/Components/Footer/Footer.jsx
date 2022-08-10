import React from "react";
import '../Footer/Footer.css'
// import '../Responsive/Resposive.css'

const Footer = () => {
  return (
    <React.Fragment>
      <footer class="footers">
        <div class="container footer-container">
          <hr class="footer-line" />
          <div class="footer">
            {/* Mobile Nav   */}
            <div class="mob-footer">
              <button class="accordion">Menu</button>
              <div class="panel">
                <div class="footer-list">
                  <a href="#">Home</a>
                  <a href="#">About</a>
                  <a href="#">Contact</a>
                  <a href="#">Blog</a>
                  <a href="#">Blog Post</a>
                  <a href="#">Pricing</a>
                  <a href="#">Pricing Single</a>
                </div>
              </div>

              <button class="accordion">Utility pages</button>
              <div class="panel">
                <div class="footer-list">
                  <a href="#">Start Here</a>
                  <a href="#">Style Guide</a>
                  <a href="#">Password Protected</a>
                  <a href="#">404 Not Found</a>
                  <a href="#">Licenses</a>
                  <a href="#">Changelog</a>
                  <a href="#">Browse more</a>
                </div>
              </div>

              <button class="accordion">Follow Us</button>
              <div class="panel">
                <div class="footer-list">
                  <a href="#">Facebook</a>
                  <a href="#">Instagram</a>
                  <a href="#">Twitter</a>
                  <a href="#">Linkedin</a>
                  <a href="#">Youtube</a>
                  <a href="#">Discord</a>
                </div>
              </div>
            </div>

            <div class="menu-line">
              <h3 class="footer-heading">Menu</h3>
              <div class="footer-list">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Blog</a>
                <a href="#">Blog Post</a>
                <a href="#">Pricing</a>
                <a href="#">Pricing Single</a>
              </div>
            </div>
            <div class="menu-line">
              <h3 class="footer-heading">Utility pages</h3>
              <div class="footer-list">
                <a href="#">Start Here</a>
                <a href="#">Style Guide</a>
                <a href="#">Password Protected</a>
                <a href="#">404 Not Found</a>
                <a href="#">Licenses</a>
                <a href="#">Changelog</a>
                <a href="#">Browse more</a>
              </div>
            </div>
            <div class="menu-line">
              <h3 class="footer-heading">Follow Us</h3>
              <div class="footer-list">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
                <a href="#">Linkedin</a>
                <a href="#">Youtube</a>
                <a href="#">Discord</a>
              </div>
            </div>
            <div class="menu-form">
              <div class="footer-form">
                <div class="texts">
                  <h3 class="footer-headings">Subscribe to our newsletter</h3>
                  <p class="footer-para">
                    Recieve upto info about latest trends and and news updates
                    via email.
                  </p>
                </div>
                <div class="formss">
                  <input type="text" placeholder="Your email" />
                  <button class="btns footer-btn">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
