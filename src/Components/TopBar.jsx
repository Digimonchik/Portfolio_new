import React, {useEffect, useState, useContext} from 'react';
import {authContext } from '../index'
import {observer} from 'mobx-react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie';

const TopBar = () => {

const [user, setUser] = useState('')


const {authStore} = useContext(authContext)

useEffect(() => setUser(authStore.user), [authStore.user])


  const handlelogout = () => {

    Cookies.remove('refreshToken');
    localStorage.removeItem('token'); 
    authStore.setAuth(false)
    authStore.setUser({})
  };





    return (
        <div className='topbar'>

            <div className='topbar__navigation'>
            <Link to = '/' className='topbar__button'>Homepage</Link>
            <div className='topbar__greeting'>Hi! {user.login}</div>
            </div>
           
           
        {authStore.isAuth ? <div className='topbar__button' onClick = {() => handlelogout()} >Logout</div> :
            <div className='topbar__buttons'>
            <Link to ='/auth/registration' className='topbar__button'>Registration</Link>
            <Link to ='/auth/login' className='topbar__button'>Login</Link>
            </div>}
        </div>
    );
};

export default observer(TopBar);