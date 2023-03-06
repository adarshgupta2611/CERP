import React, { Fragment, useEffect, useState } from "react";
import Header from "../Admin/HeaderAdmin/Header";
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
        `http://localhost:8080/admins/list/${param.sn}`
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
          <th>First Name</th>
          <th>Last Name</th>
          <th>Attendance</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>80</td>
          <td><Button variant="secondary">Mark Otto</Button></td>
        </tr> */}
        {feed.map((value,index)=>{
          return (
            <tr key={index}>
              <td>{value.student.id}</td>
              <td>{value.student.firstName}</td>
              <td>{value.student.lastName}</td>
              <td>{value.attendance}</td>
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
