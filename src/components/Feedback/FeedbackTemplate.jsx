import React, { Fragment } from "react";
import { Card } from "react-bootstrap";

const FeedbackTemplate = (props)=>{
  const handleClick=(e)=>{
    prompt("Enter your rating for this course")
    console.log(e.target.outerText);
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