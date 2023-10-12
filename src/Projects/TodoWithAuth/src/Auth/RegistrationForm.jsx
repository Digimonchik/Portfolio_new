import React, {useContext, useState, useEffect} from 'react';
import { authContext } from '../../../../index';
import {Link, useNavigate} from 'react-router-dom'
import {observer} from 'mobx-react'
import bcrypt from 'bcryptjs';

const RegistrationForm = () => {

const [login, setName] = useState('')
const [password, setPassword] = useState('')
const [isAuth, setAuth] = useState(false)

const {authStore} = useContext(authContext)

const navigate = useNavigate()

useEffect(() => {setAuth(authStore.isAuth)}, [authStore.isAuth])

useEffect(() => {
  if (localStorage.getItem('token')) {
      authStore.checkAuth()
      }
})

  if(isAuth) {navigate('/')};



    return (
      <div className = 'form'>
        <div className="form__container">
        <div className="form__header">
          <h3 className="form__header_sign-in">Sign up</h3>
          <Link to = '/auth/login'> <div className="form__header_button">login</div></Link>
        </div>
      
        <form className = 'form__inputs' action="#">
            <div>
               <label className="form__label user" htmlFor="text">
               </label>
              <input className="form__input" type="text"  
              
              onChange= {(event) => {
                setName(event.target.value)}}
              placeholder="login"  />
            </div> 
            <div>
              <label className="form__label lock" htmlFor="password"> 
              </label>
              <input className="form__input" type="password" 
              
              onChange={(event) => { 
                setPassword(event.target.value)}}
              
              placeholder="" />
            </div> 
            {/* <div>
              <label className="form__label name" htmlFor="name"> 
              </label>
              <input className="form__input" type="name" 
              
              onChange={(event) => { 
                setPassword(event.target.value)}}
              
              placeholder="" />
            </div>  */}
          
           <div>
            <input className="form__submit" 
            onClick={(event) => {event.preventDefault()
              authStore.registration(login, bcrypt.hashSync(password, 2))}}
            
            type="submit" value="Sign up" />
          </div>
            <span className="form__forgot-label">if you don't want to register please use admin as login and password to test this app</span>
        </form>  
      </div>
      </div>
    );
};

export default observer(RegistrationForm);