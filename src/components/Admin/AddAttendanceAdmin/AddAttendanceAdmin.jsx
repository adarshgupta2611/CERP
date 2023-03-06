import React, { Fragment, useEffect, useState } from "react";
import Header from "../HeaderAdmin/Header";
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

const AddAttendanceAdmin = () => {
  const param = useParams();
  const handleClick = () => {};

  return (
    <Fragment>
      <Header
        linkText="Home"
        hrefText={`/admin/${localStorage.getItem("adminToken")}`}
        linkText2="| Logout"
        hrefText2="/admin"
      ></Header>

      <div>
        <hr></hr>
        <MDBContainer style={{maxWidth:"50%"}} fluid>
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
                      label="Student Id"
                      size="lg"
                      id="form1"
                      type="number"
                    />
                  </MDBCol>

                  <MDBCol md="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Attendance"
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

export default AddAttendanceAdmin;
