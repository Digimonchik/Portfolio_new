import React, { useContext, useEffect } from "react";
import { authContext } from "../index";
import { Routes, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Homepage from "./Homepage";
import HangmanApp from "../Projects/HangmanGame/src/HangManApp";
import AuthPage from "../Projects/TodoWithAuth/src/Components/AuthPage";
import LoginForm from "../Projects/TodoWithAuth/src/Auth/LoginForm";
import RegistrationForm from "../Projects/TodoWithAuth/src/Auth/RegistrationForm";
import TodoPage from "../Projects/TodoWithAuth/src/Components/Todos/TodoPage";
import WordDefPage from "../Projects/WordDefinition/WordDefPage";
import ContactsPage from "./Contacts/ContactsPage";
import GifsPage from "../Projects/GifsApp/GifsPage";
import Cinema from "../Projects/Cinema/Cinema.tsx";
import MovieDetails from "../Projects/Cinema/MovieDetails.tsx";
const App = () => {
  const { authStore } = useContext(authContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      authStore.checkAuth();
    }
  });

  return (
    <div className="page">
      <Routes>
        <Route exact path="/" element={<Homepage />}>
          {/* <Route  path = 'layouts' element = {<Layouts/>}/> */}
        </Route>
        <Route path="todoApp" element={<TodoPage />} />
        <Route path="wordsApp" element={<WordDefPage />} />
        <Route path="hangman" element={<HangmanApp />} />
        <Route path="auth" element={<AuthPage />}>
          <Route path="/auth/login" element={<LoginForm />} />
          <Route path="/auth/registration" element={<RegistrationForm />} />
        </Route>
        <Route path="movies" element={<Cinema />}></Route>
        <Route path="movies/:id" element={<MovieDetails />} />
        <Route path="gifsApp" element={<GifsPage />}></Route>
        <Route path="contacts" element={<ContactsPage />}></Route>
      </Routes>
    </div>
  );
};

export default observer(App);
