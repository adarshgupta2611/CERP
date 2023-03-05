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

const Index = () => {
  const param = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fname = useSelector((store)=>store.profile.fname)
  const lname = useSelector((store)=>store.profile.lname)
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
      console.log(data[0]);
      for(let i=0;i<data.length;i++){
        newLabel.push(data[i].subjectName);
        newData.push(data[i].attendance)
        newDataAbsent.push(100-data[i].attendance)
      }
      dispatch(attendanceActions.changeDatasetsData1(newData));
      dispatch(attendanceActions.changeDatasetsData0(newDataAbsent));
      dispatch(attendanceActions.changeLabel(newLabel));
      dispatch(profileActions.changeAddress(data[0].address));
      dispatch(profileActions.changeFname(data[0].firstName));
      dispatch(profileActions.changeLname(data[0].lastName));
      dispatch(profileActions.changeEmail(data[0].email));
      dispatch(profileActions.changeGender(data[0].gender));
      dispatch(profileActions.changeCourse(data[0].course.courseName));

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
          <p>Hello {fname} {lname}</p>
          <p>Here is Your Subject Wise Attendance Graph</p>
          <AttendanceGraph></AttendanceGraph>
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
