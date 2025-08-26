import React from "react";
import CreateTodo from "./CreateTodo";
import "./todostyles.scss";
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

        <CreateTodo></CreateTodo>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default TodoPage;
