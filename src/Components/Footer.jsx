import React from 'react';
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className = 'footer'>
            <div className='footer__navigation'>
            <Link to='/contacts' className = 'footer__navigation_link' >see contacts</Link>
            <Link to='/'className = 'footer__navigation_link' >return to main page</Link>
            </div>
            <div className='footer__information'>

                this website is still under development. If you see any errors, please contact me via email or telegram. thank you!
            </div>
        </div>
    );
};

export default Footer;