import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import styles from "./FeedbackTemplate.module.css"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const FeedbackTemplate = (props)=>{
  const param = useParams();
  const navigate = useNavigate();

  const handleClick=async (e)=>{
    const sn = e.target.outerText;
    navigate(`${sn}`);
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