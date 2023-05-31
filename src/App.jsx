import React, {useContext, useEffect} from 'react'
import { authContext } from './index'
import {Routes, Route} from 'react-router-dom'
import {observer} from 'mobx-react-lite'
import Homepage from './Components/Homepage'
import Layouts from './Components/LayoutProjects/Layouts';
import HangmanApp from './Projects/HangmanGame/src/HangManApp';
import AuthPage from './Projects/TodoWithAuth/src/Components/AuthPage';
import LoginForm from './Projects/TodoWithAuth/src/Auth/LoginForm';
import RegistrationForm from './Projects/TodoWithAuth/src/Auth/RegistrationForm';
import TodoPage from './Projects/TodoWithAuth/src/Components/Todos/TodoPage';
import WordDefPage from './Projects/WordDefinition/WordDefPage';

const App = () => {


  const {authStore} = useContext(authContext)



  useEffect(() => {
    if (localStorage.getItem('token')) {
        authStore.checkAuth()
        console.log('работает')
  }
})


  return (
  <div className='page'>
  <Routes>
    <Route exact path = '/' element ={<Homepage/>}>
     <Route  path = 'layouts' element = {<Layouts/>}/>
    </Route>
    <Route path ='todoApp' element = {<TodoPage/>}/>
    <Route path = 'wordsApp' element ={<WordDefPage/>}/> 
    <Route path = 'hangman' element ={<HangmanApp/>}/> 
    <Route path = 'auth' element = {<AuthPage/>}>
    <Route path = '/auth/login' element={<LoginForm/>}/>
    <Route path = '/auth/registration' element={<RegistrationForm/>}/>
    </Route>
  </Routes>
  </div>
  )
};

export default observer(App)

