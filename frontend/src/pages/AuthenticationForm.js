import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useAuthToken } from "../config/auth";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "../aws-exports";
Amplify.configure(awsconfig);
const AuthenticationForm = ({ loading }) => {
  const { handleSubmit, register } = useForm();
  const [_, setAuthToken, removeAuthToken] = useAuthToken();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    const getLog = await Auth.signIn(email, password);
    Auth.currentSession().then((res) => {
      const accessToken = res.getAccessToken();
      const jwt = accessToken.getJwtToken();
      removeAuthToken();
      setAuthToken(jwt);
    });
  };

  return (
    <div style={{ margin: "auto", padding: "100px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          Email:
          <input
            className="email"
            type="text"
            onChange={(event) => setEmail(event.target.value)}
          />
        </p>
        <p>
          Password:
          <input
            className="password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </p>
        <p>
          <button type="submit">Login</button>
        </p>
      </form>
    </div>
  );
};

export default AuthenticationForm;
