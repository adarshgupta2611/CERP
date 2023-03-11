import React, { Fragment } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Feedback.module.css"
import { useParams } from "react-router-dom";
import FeedbackTemplate from "./FeedbackTemplate"
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { subjectActions } from "../../store/SubjectStore";
import axios from "axios";

const Feedback = ()=>{
  const param = useParams();
  const dispatch  = useDispatch();
  const subjects = useSelector((store)=>store.subject.subjectName);
  const course = useSelector((store)=>store.profile.course)

  useEffect(()=>{
    const helperSubject = async()=>{
      const resp = await axios.get(`http://localhost:8080/admins/courses/${course}`)
      console.log(resp.data)
      const newSId = []
      const newSName = []
      for(let i=0;i<resp.data.length;i++){
        newSId.push(resp.data[i].id)
        newSName.push(resp.data[i].subjectName)
      }
      dispatch(subjectActions.changeSubjectId(newSId));
      dispatch(subjectActions.changeSubjectName(newSName));
    }

    helperSubject();
  },[])

  return(
    <Fragment>
      <Header linkText="Home" hrefText={`/student/${param.id}`} linkText2="| Logout" hrefText2="/"></Header>
      <div className={styles.content}>
        <Sidebar></Sidebar>
        <div className={styles.feedbackDiv}>
          {subjects.map((value,index)=>{
            return (<Fragment key={index}><FeedbackTemplate content={value}></FeedbackTemplate></Fragment>)
          })}
        </div>
      </div>
    </Fragment>
  )
}

export default Feedback;