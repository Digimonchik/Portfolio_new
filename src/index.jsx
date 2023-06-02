import React, {createContext}from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './Components/App';
import { Provider } from 'mobx-react';
import './index.scss';
import Store from './store/store'
import AuthStore from './store/authStorage'
import TodoStore from './store/todoStore'
import WordsStore from './store/wordsStore';

const container = document.getElementById("root")
const root = createRoot(container)


export const store = new Store() 
export const authStore = new AuthStore()
export const todoStore = new TodoStore()
export const wordsStore = new WordsStore()
export const wordsContext = createContext({wordsStore})
export const authContext =  createContext({authStore})
export const Context = createContext({store})
export const todoContext = createContext({todoStore})


root.render(
    <Provider value = {{authStore, store, todoStore, wordsStore}}>
     <BrowserRouter>
     <App
    />
    </BrowserRouter>
    </Provider>
)
