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
            Front-End Developer
          </div>
          <h1 className="page-header__info_name">Dmytro Lohvynenko</h1>

          <Link className="page-header__info_button" to="/cv">
            Contact me
          </Link>
        </div>
        <div className="page-header__img"></div>
      </div>
    );
  }
}
export default Header;
