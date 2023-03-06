import React, { Fragment, useEffect } from "react";
import { useParams, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./IndexAdmin.module.css";
import { useDispatch } from "react-redux";
import { adminLoginActions } from "../../../store/AdminLoginStore";
import Header from "../HeaderAdmin/Header";
import { Card } from "react-bootstrap";
import { courseActions } from "../../../store/CourseStore";

const IndexAdmin = () => {
  const param = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAttendanceClick = async ()=>{
    const response = await axios.get("http://localhost:8080/admins/courses");
    const data = response.data;
    const cid=[]
    const courseName=[]
    for(let i=0;i<data.length;i++){
      cid.push(data[i].id)
      courseName.push(data[i].courseName)
    }
    dispatch(courseActions.changeCourseId(cid))
    dispatch(courseActions.changeCourseName(courseName))
    navigate(`/admin/${param.id}/attendance`)
  }

  const handleFeedbackClick = async ()=>{
    const response = await axios.get("http://localhost:8080/admins/courses");
    const data = response.data;
    const cid=[]
    const courseName=[]
    for(let i=0;i<data.length;i++){
      cid.push(data[i].id)
      courseName.push(data[i].courseName)
    }
    dispatch(courseActions.changeCourseId(cid))
    dispatch(courseActions.changeCourseName(courseName))
    navigate(`/admin/${param.id}/feedback`)
  }

  useEffect(() => {
    if (localStorage.getItem("adminToken") != null) {
      dispatch(adminLoginActions.changeIsAuthTrue());
    }

    if (localStorage.getItem("adminToken") !== param.id) {
      alert("This Admin is not authorized");
      navigate("/admin");
    }
  }, [dispatch,navigate,param.id]);

  return (
    <Fragment>
      <Outlet />
      <Header
        linkText="Home"
        hrefText={`/admin/${localStorage.getItem("adminToken")}`}
        linkText2="| Logout"
        hrefText2="/admin"
      ></Header>
      <hr style={{ height: "1px" }}></hr>
      <div className={styles.content}>
        <Card
          className={`${styles.card}`}
          onClick={handleAttendanceClick}
          style={{ maxWidth: "15rem", padding: "0 5px" }}
        >
          <Card.Body style={{ fontSize: "20px" }}>Attendance</Card.Body>
        </Card>

        <Card
          className={`${styles.card}`}
          onClick={handleFeedbackClick}
          style={{ maxWidth: "15rem", padding: "0 5px" }}
        >
          <Card.Body style={{ fontSize: "20px" }}>Show Feedback</Card.Body>
        </Card>
      </div>
    </Fragment>
  );
};

export default IndexAdmin;
