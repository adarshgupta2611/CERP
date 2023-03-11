import React, { Fragment } from "react";
import Header from "../HeaderAdmin/Header";
import { useSelector } from "react-redux";
import styles from "./AttendanceAdmin.module.css"
import { Card } from "react-bootstrap";
import { useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { courseActions } from "../../../store/CourseStore";

const AttendanceAdmin = () => {
  const courses = useSelector((store)=>store.course.courseName)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleCourseClick = async (e)=>{
      const response = await axios.get("http://localhost:8080/admins/courses");
      const data = response.data;
      const cn = e.target.outerText;
      const cid=[]
      const cName=[]
      for(let i=0;i<data.length;i++){
        cid.push(data[i].id)
        cName.push(data[i].courseName)
      }
      dispatch(courseActions.changeCourseId(cid))
      dispatch(courseActions.changeCourseName(cName))
      navigate(`${cn}`)
  }
  return (
    <Fragment>
      <Header
        linkText="Home"
        hrefText={`/admin/${localStorage.getItem("adminToken")}`}
        linkText2="| Logout"
        hrefText2="/admin"
      ></Header>
      
      <div className={styles.content}>
        
          {courses.map((value, index) => {
            return (<Card key={index}
              className={`${styles.card}`}
              onClick={handleCourseClick}
              style={{ maxWidth: "15rem", padding: "0 5px" }}
            >
              <Card.Body style={{ fontSize: "20px" }}>{value}</Card.Body>
            </Card>);
          })}
      </div>
    </Fragment>
  );
};

export default AttendanceAdmin;
