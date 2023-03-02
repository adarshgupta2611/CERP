import React, { Fragment } from "react";
import AttendanceGraph from "../AttendanceGraph";
import styles from "./Index.module.css";
import Header from "./Header";
import Sidebar from "../Sidebar/Sidebar";
import {Outlet} from "react-router-dom";

const Index = () => {
  return (
    <Fragment>
      <Outlet/>
      <Header></Header>
      <hr style={{ height: "1px" }}></hr>
      <div className={styles.content}>
        <Sidebar></Sidebar>
        <div className={styles.graphDiv}>
          <p>Hello Student</p>
          <p>Here is Your Subject Wise Attendance Graph</p>
          <AttendanceGraph></AttendanceGraph>
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
