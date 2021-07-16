import React from "react";
import { useLogout } from "../config/auth";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Admin } from "../Component/Admin";
import { User } from "../Component/User";
import { Na } from "../Component/Na";

const Private = (props) => {
  const logout = useLogout();

  return (
    <div style={{ margin: "auto", padding: "100px" }}>
      <h4>Congratulations, you are login</h4>

      <h6>
        <a href="/admin">Admin</a>
      </h6>
      <h6>
        <a href="/user">User</a>
      </h6>
      <h6>
        <a href="/NA">NA</a>
      </h6>

      <div>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Private;
