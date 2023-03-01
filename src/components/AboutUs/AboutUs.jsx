import React, { Fragment } from "react";
import Header from "../Student/Header";
import AboutUsTemplate from "./AboutUsTemplate";
import styles from "./AboutUs.module.css"

const AboutUs = () => {
  return (
    <div className={styles.outer}>
      <Header></Header>
      <div className={styles.about}>
      <AboutUsTemplate/>
      </div>
    </div>
  );
};

export default AboutUs;