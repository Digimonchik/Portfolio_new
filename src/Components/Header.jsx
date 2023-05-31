import React, { Component } from 'react';
import TopBar from './TopBar';

class Header extends Component {
    render() {
        return (
            <header className= 'header'>
                <div className='header__info'> 
                <h1 className='header__info_name'>Dmitry Logvinenko</h1>
                <div className='header__info_description'>Front End Web Developer</div>
                </div>

                <div className='header__img'></div>
            </header>
        );
    }
}
export default Header;