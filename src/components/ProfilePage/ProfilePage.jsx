import React, {Fragment} from "react";
import Header from "../Index/Header";
import ProfileTemplate from "./ProfileTemplate";
import styles from "./ProfilePage.module.css"
import Sidebar from "../Sidebar/Sidebar";

const ProfilePage = () => {
  return (
    <Fragment>
      <Header></Header>
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
