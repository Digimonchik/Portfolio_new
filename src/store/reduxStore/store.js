import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import gifsReducer from './gifsSlice';
import { saveState } from "./todoSlice";


const store =  configureStore({
  reducer: {
    todos: todoReducer,
    gifs: gifsReducer,
  },
});

store.subscribe(() => {
  saveState(store.getState().todos);
});

export default store;



