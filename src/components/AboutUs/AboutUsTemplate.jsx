import React from "react";

const AboutUsTemplate = (props)=>{
  return(
    <div className="card" style={{minWidth: "10rem",maxWidth : "35rem"}}>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p dangerouslySetInnerHTML={{__html: props.content}} className="card-text">
          </p>
        </div>
      </div>
  )
}

export default AboutUsTemplate;