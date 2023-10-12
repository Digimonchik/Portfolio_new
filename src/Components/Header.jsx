import React, { Component } from 'react';
import TopBar from './TopBar';

class Header extends Component {
    render() {
        return (
            <header className= 'page-header'>
                <div className='page-header__info'> 
                <h1 className='page-header__info_name'>Dmytro Lohvynenko</h1>
                <div className='page-header__info_description'>Front-End Developer</div>
                </div>

                <div className='page-header__img'></div>
            </header>
        );
    }
}
export default Header;