import React, { Fragment } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Feedback.module.css"
import { useParams } from "react-router-dom";
import FeedbackTemplate from "./FeedbackTemplate"
import { useSelector } from "react-redux";

const Feedback = ()=>{
  const param = useParams();
  const subjects = useSelector((store)=>store.attendance.labels);

  return(
    <Fragment>
      <Header linkText="Home" hrefText={`/student/${param.id}`} linkText2="| Logout" hrefText2="/"></Header>
      <div className={styles.content}>
        <Sidebar></Sidebar>
        <div className={styles.feedbackDiv}>
          {subjects.map((value,index)=>{
            return (<FeedbackTemplate content={value}></FeedbackTemplate>)
          })}
        </div>
      </div>
    </Fragment>
  )
}

export default Feedback;