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

const Index = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const fname = useSelector((store)=>store.profile.fname)
  const lname = useSelector((store)=>store.profile.lname)


  useEffect(()=>{
    async function helper(){
      const response  = await axios.get(`http://localhost:8080/${param.id}`);
      console.log(response.data);
    }
    helper();

  },[]);

  return (
    <Fragment>
      <Outlet/>
      <Header linkText="Home" hrefText={`/student/${param.id}`} linkText2="| Logout" hrefText2="/"></Header>
      <hr style={{ height: "1px" }}></hr>
      <div className={styles.content}>
        <Sidebar id={param.id}></Sidebar>
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
