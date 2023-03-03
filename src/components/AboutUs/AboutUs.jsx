import React from "react";
import Header from "../Header/Header";
import AboutUsTemplate from "./AboutUsTemplate";
import styles from "./AboutUs.module.css"

const AboutUs = () => {
  return (
    <div className={styles.outer}>
      <Header linkText="Home" hrefText="/"></Header>
      <div className={styles.about}>
        <AboutUsTemplate title="About Us" content="Centre for Development of Advanced Computing (C-DAC) is the premier R&D organization of the Ministry of Electronics and Information Technology (MeitY) for carrying out R&D in IT, Electronics and associated areas. Different areas of C-DAC, had originated at different times, many of which came out as a result of identification of opportunities. C-DAC has today emerged as a premier R&D organization in IT&E (Information Technologies and Electronics) in the country working on strengthening national technological capabilities in the context of global developments in the field and responding to change in the market need in selected foundation areas. In that process, C-DAC represents a unique facet working in close junction with MeitY to realize nation’s policy and pragmatic interventions and initiatives in Information Technology. As an institution for high-end Research and Development (R&D), C-DAC has been at the forefront of the Information Technology (IT) revolution, constantly building capacities in emerging/enabling technologies and innovating and leveraging its expertise, caliber, skill sets to develop and deploy IT products and solutions for different sectors of the economy, as per the mandate of its parent, the Ministry of Electronics and Information Technology, Ministry of Communications and Information Technology, Government of India and other stakeholders including funding agencies, collaborators, users and the market-place."/>
        <AboutUsTemplate title="Contact Us" content="Centre for Development of Advanced Computing
Pune University Campus, Ganesh Khind
Pune - 411 007
Maharashtra (India)
Phone:+91-20-2570-4100, Fax: +91-20-2569 4004

Centre for Development of Advanced Computing, Knowledge Park
Opp. HAL Aeroengine Division
Old Madras Road, Byappanahalli,
Bengaluru - 560 038
Karnataka (India)
Phone: +91-80-25093400"/>
      </div>
    </div>
  );
};

export default AboutUs;