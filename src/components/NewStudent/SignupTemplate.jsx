import React, { Fragment } from "react";
import Header from "./Header"
import SignupForm from "./SignupForm";

const SignupTemplate = ()=>{
  return (
    <Fragment>
    <Header></Header>
    <SignupForm></SignupForm>
    </Fragment>
  )
}

export default SignupTemplate;