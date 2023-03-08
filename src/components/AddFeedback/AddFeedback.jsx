import React, { Fragment, useEffect, useState } from "react";
import Header from "../Header/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { $ } from "jquery";

const AddFeedback = () => {
  const param = useParams();
  const handleClick = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8080/feedback/${param.id}/${param.sn}`,
        {}
      );
      console.log(response.data);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <Fragment>
      <Header
        linkText="Home"
        hrefText={`/student/${param.id}`}
        linkText2="| Logout"
        hrefText2="/"
      ></Header>

      <div>
        <hr></hr>
        <MDBContainer style={{ maxWidth: "50%" }} fluid>
          <MDBRow className="justify-content-center align-items-center m-5">
            <MDBCard>
              <MDBCardBody className="px-4">
                <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">
                  Feedback Form
                </h3>

                <MDBRow>
                  <MDBCol md="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Student Id"
                      size="lg"
                      id="form1"
                      type="number"
                      value={param.id}
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Subject Name"
                      size="lg"
                      id="form1"
                      type="text"
                      value={param.sn}
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Feedback Rating"
                      size="lg"
                      id="form2"
                      type="number"
                    />
                  </MDBCol>
                </MDBRow>
                <Button onClick={handleClick} variant="primary" size="lg">
                  Submit
                </Button>
              </MDBCardBody>
            </MDBCard>
          </MDBRow>
        </MDBContainer>
      </div>
    </Fragment>
  );
};

export default AddFeedback;
