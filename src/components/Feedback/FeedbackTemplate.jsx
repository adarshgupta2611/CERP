import React, { Fragment } from "react";
import { Card } from "react-bootstrap";

const FeedbackTemplate = (props)=>{
  const handleClick=()=>{
    prompt("Enter your rating for this course")
  }

  return(
    <Fragment>
      <Card onClick={handleClick} style={{ maxWidth: '15rem' ,padding : "0 5px"}}>
      <Card.Body style={{fontSize:"20px"}}>{props.content}</Card.Body>
    </Card>

    </Fragment>
  )
}

export default FeedbackTemplate;