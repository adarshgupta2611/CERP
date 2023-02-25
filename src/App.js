import React from "react";
import { Fragment } from "react";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <LoginForm></LoginForm>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
