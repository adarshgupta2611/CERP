import React, {Fragment} from "react";
import Header from "../Header/Header";
import ProfileTemplate from "./ProfileTemplate";
import styles from "./ProfilePage.module.css"
import Sidebar from "../Sidebar/Sidebar";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const param = useParams();
  return (
    <Fragment>
      <Header linkText="Home" hrefText={`/student/${param.id}`} linkText2="| Logout" hrefText2="/"></Header>
      <div className={styles.content}>
        <Sidebar></Sidebar>
        <div className={styles.profileDiv}>
          <ProfileTemplate></ProfileTemplate>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfilePage;
