import { configureStore } from "@reduxjs/toolkit";
import todoReducer, { saveState } from "./todoSlice.js";
import cinemaReducer from "./cinemaSlice.js";
import movieReducer from "./movieSlice.ts";
import gifsReducer from "./gifsSlice.js";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    gifs: gifsReducer,
    films: cinemaReducer,
    movie: movieReducer,
  },
});

store.subscribe(() => {
  saveState(store.getState().todos);
});

// Тип состояния стора
export type RootState = ReturnType<typeof store.getState>;

// Тип диспатча
export type AppDispatch = typeof store.dispatch;

export default store;
