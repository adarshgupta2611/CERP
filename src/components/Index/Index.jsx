import React, { Fragment } from "react";
import Header from "../Admin/Header"
import AttendanceGraph from "../AttendanceGraph";
import styles from "./Index.module.css"
import Sidebar from "../Sidebar/Sidebar";

const Index = ()=>{
  return (
    <Fragment>
      <Header></Header>
      <hr></hr>
      <div className={styles.content}>
        <Sidebar></Sidebar>
        <div className={styles.graphDiv}>
          <AttendanceGraph></AttendanceGraph>
        </div>
      </div>
    </Fragment>
  )
}

export default Index;