import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import styles from "./FeedbackTemplate.module.css"
import axios from "axios";
import { useParams } from "react-router-dom";

const FeedbackTemplate = (props)=>{
  const param = useParams();
  const handleClick=async (e)=>{
    const r = parseInt(prompt("Enter your rating for this course"));
    const sub = e.target.outerText;
    try {
      const response = await axios.post(`http://localhost:8080/feedback/${param.id}/${sub}`,{"rating" : r});
      alert("Rating Submitted Successfully")
    } catch (error) {
      alert("Error: " + error.message);
    }
    

  }

  return(
    <Fragment>
      <Card className={`${styles.card}`} id={props.id} onClick={handleClick} style={{ maxWidth: '15rem' ,padding : "0 5px"}}>
      <Card.Body style={{fontSize:"20px"}}>{props.content}</Card.Body>
    </Card>

    </Fragment>
  )
}

export default FeedbackTemplate;