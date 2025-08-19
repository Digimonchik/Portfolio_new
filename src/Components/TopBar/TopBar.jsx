import React, { useEffect, useState, useContext } from "react";
import { authContext } from "../../index";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const TopBar = () => {
  const [user, setUser] = useState("");

  const { authStore } = useContext(authContext);

  useEffect(() => setUser(authStore.user), [authStore.user]);

  const handlelogout = () => {
    Cookies.remove("refreshToken");
    localStorage.removeItem("token");
    authStore.setAuth(false);
    authStore.setUser({});
  };

  return (
    <div className="topbar">
      <div className="topbar__navigation">
        <Link className="topbar__navigation_link" to="/">
          Home
        </Link>
        <Link className="topbar__navigation_link" to="/">
          CV
        </Link>
        <Link className="topbar__navigation_link" to="/">
          Authorization
        </Link>
      </div>
    </div>
  );
};

export default observer(TopBar);
