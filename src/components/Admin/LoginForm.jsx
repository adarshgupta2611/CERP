import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import { useSelector,useDispatch} from "react-redux";
import { adminLoginActions } from "../../store/AdminLoginStore";
import styles from "./LoginForm.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function LoginForm(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const em = useSelector((state) => state.adminLogin.em);
  const pwd = useSelector((state) => state.adminLogin.pwd);
 
  useEffect(()=>{
    if(localStorage.getItem("adminToken")!=null){
      dispatch(adminLoginActions.changeIsAuthTrue())
      navigate(`/admin/${localStorage.getItem("adminToken")}`)
    }
  },[])

  const handleEnter = (event)=>{
    if(event.nativeEvent.code==="Enter"){
      handleAdminClick();
    }
  }

  const handleAdminClick = async ()=>{
    if(localStorage.getItem("adminToken")){
      dispatch(adminLoginActions.changeIsAuthTrue())
      navigate(`/admin/${localStorage.getItem("adminToken")}`)
    }

    try {
    const objSend = {email : em, password: pwd};
    const response  = await axios.post("http://localhost:8080/admins/signin",objSend);
    localStorage.setItem("adminToken",response.data)
    dispatch(adminLoginActions.changeIsAuthTrue())
    navigate(`/admin/${response.data}`)
    } catch (error) {
      alert(error);
    }
    
    
  }

  return (
    <MDBContainer fluid>
      <hr></hr>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
              <h2 className="fw-bold mb-2 text-center">Admin Sign In</h2>
              <br></br>
              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
                value={em}
                onChange={(event)=>dispatch(adminLoginActions.changeEm(event.target.value))}
              />
              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                value={pwd}
                onChange={(event)=>dispatch(adminLoginActions.changePwd(event.target.value))}
                onKeyDown={(event)=>{handleEnter(event)}}
              />

              <Button onClick={handleAdminClick} variant="primary" size="lg">
                Login
              </Button>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default LoginForm;
