import { createSlice } from "@reduxjs/toolkit";


const loadState = () => {
  try {
    const serializedState = localStorage.getItem("todos");
    return serializedState ? JSON.parse(serializedState) : { todos: [] };
  } catch (e) {
    return { todos: [] };
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("todos", serializedState); 
  } catch (e) {
    console.error("Ошибка сохранения в LocalStorage", e);
  }
};

const todoSlice = createSlice({
  name: "todos",
  initialState: loadState(),
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: action.payload.id,
        value: action.payload.value,
        isDone: false,
      });
      saveState(state); 
    },
    toggleComplete(state, action) {
      const toggledTodo = state.todos.find((todo) => todo.id === action.payload);
      if (toggledTodo) {
        toggledTodo.isDone = !toggledTodo.isDone;
        saveState(state); 
      }
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      saveState(state); 
    },
  },
});


export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;


export default todoSlice.reducer;