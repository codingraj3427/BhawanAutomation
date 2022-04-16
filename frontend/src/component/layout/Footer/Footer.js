import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h2>Address</h2>
        <p>Debolina Apartment flt no-101 ground floor teghoria Behind Eastern plaza hotel</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Bhawan Automation</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2022 &copy;Rajarshi Chakraborty</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://instagram.com">Instagram</a>
        <a href="https://instagram.com">Youtube</a>
        <a href="https://instagram.com">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
