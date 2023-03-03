import React from "react";
import { Fragment } from "react";
import Header from "../Header/Header";
import LoginForm from "./LoginForm"
import Footer from "../Footer/Footer"

const StudentLoginForm = ()=>{
  return(
  <Fragment>
    <Header linkText="Admin SignIn" hrefText="/admin"></Header>
    <LoginForm></LoginForm>
    <Footer></Footer>
  </Fragment>
  )};

  export default StudentLoginForm;
      