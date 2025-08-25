import React from "react";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";
import TopBar from "../../../../../Components/TopBar/TopBar";
import Footer from "../../../../../Components/Footer/Footer";
import TodoListRedux from "../../../../TodoRedux/Components/TodoListRedux";

const TodoPage = () => {
  return (
    <div className="todo-page">
      <TopBar></TopBar>
      <div className="todo-page__container">
        <TodoListRedux></TodoListRedux>
        <div className="todo-page__container_list">
          <div className="todo-page__description">
            This todo-list is made with MERN. Registration is required in order
            to connect to MongoDB
          </div>
          <CreateTodo></CreateTodo>
          <TodoList></TodoList>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default TodoPage;
