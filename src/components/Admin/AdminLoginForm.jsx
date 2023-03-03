import React from "react";
import { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import LoginForm from "./LoginForm"

const AdminLoginForm = ()=>{
  return(
  <Fragment>
    <Header linkText="Student Login" hrefText="/"></Header>
    <LoginForm></LoginForm>
    <Footer></Footer>
  </Fragment>
  )};

  export default AdminLoginForm;