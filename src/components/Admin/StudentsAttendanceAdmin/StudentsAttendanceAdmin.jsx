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

  const handleUpdateClick = async(e)=>{
    try {
      const attendance = parseInt(prompt("Enter the updated attendance"));
      const response = await axios.patch(`http://localhost:8080/attendance/${param.sn}/${e.target.id}`,{"attendance" : attendance});
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    const helper = async () => {
      const response = await axios.get(
        `http://localhost:8080/attendance/admins/${param.sn}`
      );
      const data = response.data;
      setAtt(data);  
    };

    helper();
  }, [param.sn,att]);

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
        {/* <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>80</td>
          <td><Button variant="secondary">Mark Otto</Button></td>
        </tr> */}
        {att.map((value,index)=>{
          return (
            <tr key={index}>
              <td>{value.student.id}</td>
              <td>{value.student.firstName}</td>
              <td>{value.student.lastName}</td>
              <td>{value.attendance}</td>
              <td><Button onClick={handleUpdateClick} id={value.student.id} variant="secondary">Mark {value.student.firstName} {value.student.lastName}</Button></td>
            </tr>
          )
        })}
      </tbody>
    </Table>
      </div>
    </Fragment>
  );
};

export default StudentsAttendanceAdmin;
