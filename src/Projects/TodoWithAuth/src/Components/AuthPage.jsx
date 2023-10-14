import { observer } from 'mobx-react-lite';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { authStore } from '../../../..';
import LoadingCircle from '../../../../Common/Loading';
import Footer from '../../../../Components/Footer';

const AuthPage = () => {


    return (

        <div className='auth'>
        <div className = 'auth__container'>
        {authStore.isLoading && <div className='loading-container'><LoadingCircle/></div>}
            <Outlet/>
        </div>
        <Footer/>
        </div>
    );
};

export default observer(AuthPage);