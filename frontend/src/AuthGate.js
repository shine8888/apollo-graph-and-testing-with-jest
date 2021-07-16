import React from "react";
import Private from "./pages/Private";
import AuthenticationForm from "./pages/AuthenticationForm";
import { useAuthToken } from "./config/auth";

export const AuthGate = () => {
  let userData = {};
  const [authToken] = useAuthToken();
  if (authToken) {
    return <Private />;
  }

  return <AuthenticationForm loading={userData.loading} />;
};
