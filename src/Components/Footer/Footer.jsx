import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import "./logo_footer.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__contacts">
        <div className="footer__header">Contacts</div>
        <Link to="/contacts" className="footer__link">
          insta: dilogvin
        </Link>
        <Link to="/" className="footer__link">
          github: digimonchyk
        </Link>
        <Link to="/" className="footer__link">
          telegram: dilogvin
        </Link>
      </div>
      <div className="footer__contacts">
        <div className="footer__header">Navigation</div>
        <Link to="/contacts" className="footer__link">
          Homepage
        </Link>
        <Link to="/" className="footer__link">
          Authorization
        </Link>
        <Link to="/" className="footer__link">
          Contacts
        </Link>
      </div>
      <div className="footer__logo">
        <img
          src={require("./logo_footer.png")}
          alt="logo"
          className="footer__image"
        />
      </div>
      {/* <div className="footer__information">
        This website is still under development. If you see any errors, please
        contact me via email or telegram. thank you!
      </div> */}
    </div>
  );
};

export default Footer;
