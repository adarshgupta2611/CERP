import React, { Fragment, useEffect } from "react";
import Header from "../HeaderAdmin/Header";
import { useSelector } from "react-redux";
import styles from "./CourseAdmin.module.css";
import { Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { subjectActions } from "../../../store/SubjectStore";

const CourseAdmin = () => {
  const subjects = useSelector((store) => store.subject.subjectName);
  const param = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const helper = async () => {
      const response = await axios.get(
        `http://localhost:8080/admins/${param.cn}`
      );
      const data = response.data;
      const sid = [];
      const sName = [];
      for (let i = 0; i < data.length; i++) {
        sid.push(data[i].id);
        sName.push(data[i].subjectName);
      }
      dispatch(subjectActions.changeSubjectId(sid));
      dispatch(subjectActions.changeSubjectName(sName));
    };

    helper();
  }, []);

  const handleSubjectClick = async (e) => {
    const sn= e.target.innerText
    navigate(`/admin/${param.id}/attendance/${param.cn}/${sn}`)
  };
  return (
    <Fragment>
      <Header
        linkText="Home"
        hrefText={`/admin/${localStorage.getItem("adminToken")}`}
        linkText2="| Logout"
        hrefText2="/admin"
      ></Header>

      <div className={styles.content}>
        {subjects.map((value, index) => {
          return (
            <Card
              className={`${styles.card}`}
              onClick={handleSubjectClick}
              style={{ maxWidth: "15rem", padding: "0 5px" }}
            >
              <Card.Body style={{ fontSize: "20px" }}>{value}</Card.Body>
            </Card>
          );
        })}
      </div>
    </Fragment>
  );
};

export default CourseAdmin;
