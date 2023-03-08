import React, { Fragment } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRadio,
} from "mdb-react-ui-kit";
import styles from "./SignupForm.module.css";
import { SignupActions } from "../../store/SignupStore";
import { useSelector, useDispatch } from "react-redux";
import $ from 'jquery';
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function SignupForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const firstName = useSelector(state=>state.signup.firstName);
  const lastName = useSelector(state=>state.signup.lastName);
  const address = useSelector(state=>state.signup.address);
  const email = useSelector(state=>state.signup.email);
  const password = useSelector(state=>state.signup.password);
  const gender = useSelector(state=>state.signup.gender);
  const courseId = useSelector(state=>state.signup.courseId);

  const handleClick = async (e)=>{
    e.preventDefault();
    let selectedValueCS = $("#cs option:selected").val();
    dispatch(SignupActions.changeCourse(selectedValueCS));
    var selectedGen = $("input[name='gen']:checked").val();
    dispatch(SignupActions.changeGender(selectedGen));  

    const obj = {"firstName":firstName,"lastName":lastName,"address":address,"email":email,"password":password,"gender":gender,"courseId":courseId}
   
    
    try {
      const response  = await axios.post("http://localhost:8080/students/signup",obj);
      console.log(response.data);
      alert("Added Successfully");
      navigate("/");
    } catch (error) {
      alert("Error in : " + error)
    }
  }

  return (
    <Fragment>
      <hr></hr>
      <MDBContainer className={styles.signupOuter} fluid>
        <MDBRow className="justify-content-center align-items-center m-5">
          <MDBCard>
            <MDBCardBody className="px-4">
              <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">
                Registration Form
              </h3>

              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="First Name"
                    size="lg"
                    id="form1"
                    type="text"
                    value={firstName}
                    onChange={(event)=>dispatch(SignupActions.changeFname(event.target.value))}
                  />
                </MDBCol>

                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Last Name"
                    size="lg"
                    id="form2"
                    type="text"
                    value={lastName}
                    onChange={(event)=>dispatch(SignupActions.changeLname(event.target.value))}
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Address"
                    size="lg"
                    id="form3"
                    type="text"
                    value={address}
                    onChange={(event)=>dispatch(SignupActions.changeAddress(event.target.value))}
                  />
                </MDBCol>

                <MDBCol md="6" className="mb-4">
                  <h6 className="fw-bold">Gender: </h6>
                  <MDBRadio
                    name="gen"
                    id="gender"
                    value="Female"
                    label="Female"
                    inline
                  />
                  <MDBRadio
                    name="gen"
                    id="gender"
                    value="Male"
                    label="Male"
                    inline
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email"
                    size="lg"
                    id="form4"
                    type="email"
                    value={email}
                    onChange={(event)=>dispatch(SignupActions.changeEmail(event.target.value))}
                  />
                </MDBCol>

                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    size="lg"
                    id="form5"
                    type="password"
                    value={password}
                    onChange={(event)=>dispatch(SignupActions.changePassword(event.target.value))}
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol>
                  <select id="cs" className={styles.box}>
                    <option value="1">PG-DAC</option>  
                    <option value="2">PG-DBDA</option>  
                  </select>                  
                </MDBCol>
                <MDBCol>
                  {/* <MDBBtn onClick={handleClick} className="mb-4" size="lg">
                    Submit
                  </MDBBtn> */}
                  <Button onClick={handleClick} variant="primary" size="lg">Submit</Button>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBContainer>
    </Fragment>
  );
}

export default SignupForm;
