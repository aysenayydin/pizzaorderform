import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Form from "./Form";
import Home from "./Home";
import Success from "./Success";

function App() {
  return (
    <>
      <Home />

      <Header />
      <Form />
      <Success />
    </>
  );
}

export default App;
