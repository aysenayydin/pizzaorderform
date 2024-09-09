import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Home from "./components/Home";
import Success from "./components/Success";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/order">
          <Form />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </>
  );
}

export default App;
