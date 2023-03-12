import React, { Fragment,useEffect } from "react";
import AttendanceGraph from "../AttendanceGraph/AttendanceGraph"
import styles from "./Index.module.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import {Outlet} from "react-router-dom";
import { useParams} from "react-router-dom";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { attendanceActions } from "../../store/AttendanceStore";
import { profileActions } from "../../store/ProfileStore";
import { loginActions } from "../../store/LoginStore";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";

const Index = () => {
  const param = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fname = useSelector((store)=>store.profile.fname)
  const course = useSelector((store)=>store.profile.course)
  const isAuth = useSelector(store=>store.login.isAuth)


  useEffect(()=>{

    if(localStorage.getItem("studentToken")!=null){
      dispatch(loginActions.changeIsAuthTrue())
    }
    
    if(localStorage.getItem("studentToken")!==param.id){
      alert("This Student is not authorized")
      navigate("/")
    }
    
    async function helper(){
      const response  = await axios.get(`http://localhost:8080/attendance/${param.id}`);
      const data = response.data;
      const newLabel=[]
      const newData=[]
      const newDataAbsent=[]
      for(let i=0;i<data.length;i++){
        newLabel.push(data[i].subjectName);
        newData.push(data[i].attendance)
        newDataAbsent.push(100-data[i].attendance)
      }
      dispatch(attendanceActions.changeDatasetsData1(newData));
      dispatch(attendanceActions.changeDatasetsData0(newDataAbsent));
      dispatch(attendanceActions.changeLabel(newLabel));

      const resp  = await axios.get(`http://localhost:8080/students/${param.id}`);
      const dataProfile = resp.data;

      dispatch(profileActions.changeAddress(dataProfile.address));
      dispatch(profileActions.changeFname(dataProfile.firstName));
      dispatch(profileActions.changeLname(dataProfile.lastName));
      dispatch(profileActions.changeEmail(dataProfile.email));
      dispatch(profileActions.changeGender(dataProfile.gender));
      dispatch(profileActions.changeCourse(dataProfile.course.courseName));
      
    }
    helper();

    
    
  },[]);

  return (
    <Fragment>
      <Outlet/>
      <Header linkText="Home" hrefText={`/student/${localStorage.getItem("studentToken")}`} linkText2="| Logout" hrefText2="/"></Header>
      <hr style={{ height: "1px" }}></hr>
      <div className={styles.content}>
        <Sidebar id={param.id} feedbackLink={param.id}></Sidebar>
        <div className={styles.graphDiv}>
          {/* <p>Hello {fname} {lname}, Here is Your Subject Wise Attendance Graph</p> */}
          <Card style={{marginTop : "10px"}}>
            <Card.Body style={{fontSize: "20px"}}>Hello {fname}, Here is Your Subject Wise Attendance Graph</Card.Body>
          </Card>
          <AttendanceGraph></AttendanceGraph>
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
