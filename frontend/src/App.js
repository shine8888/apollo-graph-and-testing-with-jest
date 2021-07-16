import React from "react";
import "./App.css";
import { AuthGate } from "./AuthGate";
import { ApolloProvider } from "@apollo/react-hooks";
import { useAppApolloClient } from "./config/apolloClient";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Admin } from "./Component/Admin";
import { User } from "./Component/User";
import { Na } from "./Component/Na";

function App() {
  const apolloClient = useAppApolloClient();

  return (
    <ApolloProvider client={apolloClient}>
      <AuthGate />
      <BrowserRouter>
        <Route path="/admin" component={Admin}></Route>
        <Route path="/user" component={User}></Route>
        <Route path="/NA" component={Na}></Route>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
