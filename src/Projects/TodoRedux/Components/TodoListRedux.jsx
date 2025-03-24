import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  toggleComplete,
  removeTodo,
} from "../../../store/reduxStore/todoSlice";

const TodoListRedux = () => {
  const [inputValue, setValue] = useState("");

  const dispatch = useDispatch();
  const storedTodos = useSelector((state) => state.todos.todos);

  const handleClick = (value) => {
    if (value.length > 0) {
      const id = Date.now();
      const isDone = false;
      dispatch(addTodo({ id, value, isDone }));
      setValue("");
    }
  };
  const togleDone = (id) => {
    dispatch(toggleComplete(id));
  };

  const remove = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="todo-page__container_list redux">
      <div className="todo-page__description">
        This todo-list is made using Redux-toolkit. Data is saved in local
        storage
      </div>
      <div className="todo-page__create">
        <input
          className="todo-page__create_input"
          type="text"
          value={inputValue}
          onChange={(event) => setValue(event.target.value)}
        ></input>
        <button
          className="todo-page__create_button"
          onClick={() => handleClick(inputValue)}
        >
          Create task
        </button>
      </div>
      <div className="todo-page__list">
        <div className="todo-page__list">
          {storedTodos.length > 0 &&
            storedTodos.map((el) => (
              <div
                className={`todo-page__todo ${el.isDone ? "green" : ""}`}
                key={el.id}
              >
                <p className="todo-page__todo_text">{el.value}</p>
                <input
                  className="todo-page__todo_isdone"
                  type="checkbox"
                  checked={el.isDone}
                  onChange={() => togleDone(el.id)}
                />
                <div
                  className="todo-page__todo_delete"
                  onClick={() => remove(el.id)}
                >
                  x
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TodoListRedux;
