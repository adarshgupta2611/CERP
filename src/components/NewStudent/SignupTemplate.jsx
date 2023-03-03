import React, { Fragment } from "react";
import Header from "../Header/Header";
import SignupForm from "./SignupForm";

const SignupTemplate = ()=>{
  return (
    <Fragment>
    <Header linkText="Home" hrefText="/"></Header>
    <SignupForm></SignupForm>
    </Fragment>
  )
}

export default SignupTemplate;