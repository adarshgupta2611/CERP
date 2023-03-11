import React, { Fragment, useEffect, useState } from "react";
import Header from "../HeaderAdmin/Header";
import styles from "./StudentsFeedbackAdmin.module.css";
import {useParams } from "react-router-dom";
import axios from "axios";
import Table from 'react-bootstrap/Table';

const StudentsFeedbackAdmin = () => {
  const param = useParams();
  const [feed,setFeed]= useState([])

  useEffect(() => {
    const helper = async () => {
      const response = await axios.get(
        `http://localhost:8080/feedback/${param.sn}`
      );
      const data = response.data;
      console.log(data);
      setFeed(data);  
    };

    helper();
  }, [param.sn]);

  return (
    <Fragment>
      <Header
        linkText="Home"
        hrefText={`/admin/${localStorage.getItem("adminToken")}`}
        linkText2="| Logout"
        hrefText2="/admin"
      ></Header>

      <div className={styles.content}>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Student Id</th>
          <th>Knowledge</th>
          <th>Communication</th>
          <th>Punctuality</th>
          <th>Teaching</th>
          <th>Guidance</th>
          <th>Suggestion</th>
        </tr>
      </thead>
      <tbody>
        {feed.map((value,index)=>{
          return (
            <tr key={index}>
              <td>{value.studentId}</td>
              <td>{value.knowledge}</td>
              <td>{value.communication}</td>
              <td>{value.punctuality}</td>
              <td>{value.teaching}</td>
              <td>{value.guidance}</td>
              <td>{value.suggestion}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
      </div>
    </Fragment>
  );
};

export default StudentsFeedbackAdmin;
