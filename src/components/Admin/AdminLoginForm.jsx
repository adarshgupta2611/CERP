import React from "react";
import { Fragment } from "react";
import Header from "./Header"
import LoginForm from "./LoginForm"
import Footer from "./Footer"

const AdminLoginForm = ()=>{
  return(
  <Fragment>
    <Header></Header>
    <LoginForm></LoginForm>
    <Footer></Footer>
  </Fragment>
  )};

  export default AdminLoginForm;