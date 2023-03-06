import React, { Fragment, useEffect, useState } from "react";
import Header from "../HeaderAdmin/Header";
import styles from "./StudentsAttendanceAdmin.module.css";
import {useParams } from "react-router-dom";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const StudentsAttendanceAdmin = () => {
  const param = useParams();
  const [att,setAtt]= useState([])
  const navigate = useNavigate();

  const handleAddClick = ()=>{
    navigate(`add`)
  }

  useEffect(() => {
    const helper = async () => {
      const response = await axios.get(
        `http://localhost:8080/admins/${param.sn}`
      );
      const data = response.data;
      
    };

    helper();
  }, []);

  return (
    <Fragment>
      <Header
        linkText="Home"
        hrefText={`/admin/${localStorage.getItem("adminToken")}`}
        linkText2="| Logout"
        hrefText2="/admin"
      ></Header>

      <div className={styles.content}>
      <Button onClick={handleAddClick} variant="outline-primary">Add Attendance</Button>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Student Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Attendance</th>
          <th>Update Attendance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>80</td>
          <td><Button variant="secondary">Mark Otto</Button></td>
        </tr>
      </tbody>
    </Table>
      </div>
    </Fragment>
  );
};

export default StudentsAttendanceAdmin;
