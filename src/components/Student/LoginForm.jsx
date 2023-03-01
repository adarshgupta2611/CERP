import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
} from "mdb-react-ui-kit";
import { useSelector,useDispatch} from "react-redux";
import { loginActions } from "../../store/LoginStore";
import styles from "./LoginForm.module.css"


function App(props) {
  const dispatch = useDispatch()

  const em = useSelector(state=>state.login.em);
  const pwd = useSelector(state=>state.login.pwd);
  const isValid = useSelector(state=>state.login.isValid);

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
                id="formControlLg"
                type="email"
                size="lg"
                value={em}
                onChange={(event)=>dispatch(loginActions.changeEm(event.target.value))}
              />
              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                value={pwd}
                onChange={(event)=>dispatch(loginActions.changePwd(event.target.value))}
              />

              <MDBBtn size="lg">Login</MDBBtn>
              <a href="/student/signup" className={styles.signup}>New User? : Signup</a>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
