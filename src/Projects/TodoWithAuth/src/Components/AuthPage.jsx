import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../../../Components/Footer';

const AuthPage = () => {
    return (
        <div className='auth'>
        <div className = 'auth__container'>
            <Outlet/>
        </div>
        <Footer/>
        </div>
    );
};

export default AuthPage;