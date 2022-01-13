import React, { FC } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ApolloProvider } from "@apollo/client";

import apollo from "./apollo";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
const App: FC = () => {
  return (
    <ApolloProvider client={apollo}>
      <TodoForm />
      <TodoList />
    </ApolloProvider>
  );
};

export default App;
