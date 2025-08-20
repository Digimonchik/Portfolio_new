import React, { Component } from "react";
import "./header.scss";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="page-header">
        <div className="page-header__info">
          <div className="page-header__info_logo"></div>
          <div className="page-header__info_description">
            frontend developer
          </div>
          <h1 className="page-header__info_name">Dmytro Lohvynenko</h1>

          <Link to="/cv">
            <button className="page-header__info_button">Contact me</button>
          </Link>
        </div>
        <div className="page-header__img">
          <div className="page-header__img_image">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
