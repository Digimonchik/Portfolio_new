import React, { useState, useContext, useEffect } from "react";
import { todoContext, authContext } from "../../../../../index";
import { observer } from "mobx-react";

const CreateTodo = () => {
  const [inputValue, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const { authStore } = useContext(authContext);
  const { todoStore } = useContext(todoContext);

  useEffect(() => {
    if (authStore.isAuth) {
      todoStore.getTodos(userId);
    }
  }, [authStore.isAuth]);

  useEffect(() => setTodos(todoStore.todo), [todoStore.todo]);

  const handledelete = (id) => {
    todoStore.deleteTodo(id);
    todoStore.getTodos(userId);
  };

  const userId = authStore.user.id;

  return (
    <>
      <div className="todo-page__container_list">
        <div className="todo-page__description">
          This todo-list is made with MERN. Registration is required in order to
          connect to MongoDB
        </div>
        <div className="todo-page__create">
          <input
            className="todo-page__create_input"
            type="text"
            value={inputValue}
            onChange={(event) => setValue(event.target.value)}
          ></input>
          <button
            disabled={!authStore.isAuth}
            className={
              authStore.isAuth
                ? "todo-page__create_button"
                : "todo-page__create_button disabled"
            }
            onClick={() => todoStore.createTodo(userId, inputValue)}
          >
            Create task
          </button>
        </div>

        {authStore.isAuth ? (
          <div className="todo-page__list">
            {todos.length > 0 ? (
              todos.map((element) => (
                <div className="todo-page__todo" key={element._id}>
                  <div className="todo-page__todo_text">{element.text}</div>
                  {/* <div className ='todo-page__todo_isdone'>✓</div> */}
                  <div
                    className="todo-page__todo_delete"
                    onClick={() => handledelete(element._id)}
                  >
                    ✖
                  </div>
                </div>
              ))
            ) : (
              <div> You have no active tasks</div>
            )}
          </div>
        ) : (
          <div>Please login to test this App</div>
        )}
      </div>
    </>
  );
};

export default observer(CreateTodo);
