import React, { Fragment, useState } from "react";
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
import $ from "jquery";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";

const AddFeedback = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);
  const [rating3, setRating3] = useState(0);
  const [rating4, setRating4] = useState(0);

  const handleClick = async () => {
    try {
      const objSent = { "knowledge":rating,"communication":rating1,"punctuality":rating2,"teaching":rating3,"guidance":rating4,"suggestion":$("#text-area").val()}
      const response = await axios.post(`http://localhost:8080/feedback/${param.id}/${param.sn}`,objSent);
      console.log(response.data);
      alert("Feedback Submitted Successfully")
      navigate(`/student/${param.id}/feedback`);
    } catch (error) {
      alert(error.response.data);
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
                      size="md"
                      id="form1"
                      type="number"
                      value={param.id}
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Subject Name"
                      size="md"
                      id="form1"
                      type="text"
                      value={param.sn}
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <Table bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Fields</th>
                        <th>Ratings</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Knowledge</td>
                        <td>
                          <Rating
                            size="20px"
                            value={rating}
                            onClick={(rate) => setRating(rate)}
                            onPointerMove={(value) => setRating(value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Communication</td>
                        <td>
                          <Rating
                            size="20px"
                            value={rating1}
                            onClick={(rate) => setRating1(rate)}
                            onPointerMove={(value) => setRating1(value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Punctuality</td>
                        <td>
                          <Rating
                            size="20px"
                            value={rating2}
                            onClick={(rate) => setRating2(rate)}
                            onPointerMove={(value) => setRating2(value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Teaching</td>
                        <td>
                          <Rating
                            size="20px"
                            value={rating3}
                            onClick={(rate) => setRating3(rate)}
                            onPointerMove={(value) => setRating3(value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Guidance</td>
                        <td>
                          <Rating
                            size="20px"
                            value={rating4}
                            onClick={(rate) => setRating4(rate)}
                            onPointerMove={(value) => setRating4(value)}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </MDBRow>
                <MDBRow>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="text-area"
                      rows="5"
                      placeholder="Suggestions...."
                    />
                  </div>
                </MDBRow>
                <br />
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
