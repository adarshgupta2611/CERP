import React from "react";

const AboutUsTemplate = (props)=>{
  return(
    <div className="card" style={{minWidth: "30rem"}}>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.content}
          </p>
        </div>
      </div>
  )
}

export default AboutUsTemplate;