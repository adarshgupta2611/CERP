import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "../../store/LoginStore";
import styles from "./LoginForm.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginForm(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const em = useSelector((state) => state.login.em);
  const pwd = useSelector((state) => state.login.pwd);
 
  useEffect(()=>{
    if(localStorage.getItem("studentToken")!=null){
      dispatch(loginActions.changeIsAuthTrue())
      navigate(`/student/${localStorage.getItem("studentToken")}`)
    }
  },[])
  const handleEnter = (event)=>{
    if(event.nativeEvent.code==="Enter"){
      handleClick();
    }
  }

  const handleClick = async ()=>{
    if(localStorage.getItem("studentToken")){
      dispatch(loginActions.changeIsAuthTrue())
      navigate(`/student/${localStorage.getItem("studentToken")}`)
    }

    try {
    const objSend = {email : em, password: pwd};
    const response  = await axios.post("http://localhost:8080/students/signin",objSend);
    localStorage.setItem("studentToken",response.data)
    dispatch(loginActions.changeIsAuthTrue())
    navigate(`/student/${response.data}`)
    } catch (error) {
      alert("Login Failed, Please check your Username and Password")
    }
    
    
  }

  return (
    <MDBContainer className={styles.outer} fluid>
      <hr></hr>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
              <h2 className="fw-bold mb-2 text-center">Student Sign In</h2>
              <br></br>
              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Email address"
                type="email"
                size="lg"
                value={em}
                onChange={(event) =>
                  dispatch(loginActions.changeEm(event.target.value))
                }
              />
              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Password"
                type="password"
                size="lg"
                value={pwd}
                onChange={(event) =>
                  dispatch(loginActions.changePwd(event.target.value))
                }
                onKeyDown={(event)=>{handleEnter(event)}}
              />

              <Button onClick={handleClick} variant="primary" size="lg">
                Login
              </Button>
              <a href="/signup" className={styles.signup}>
                New User? : Signup
              </a>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default LoginForm;
