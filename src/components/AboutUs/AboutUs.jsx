import React from "react";
import Header from "../Header/Header";
import AboutUsTemplate from "./AboutUsTemplate";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.outer}>
      <Header linkText="Home" hrefText="/"></Header>
      <div className={styles.full}>
        <div className={styles.about}>
          <AboutUsTemplate
            title="About Us"
            content="XYZ Institute of Technology
          
          The XYZ institute of technology is the oldest collage in town. As an internationally renowned centre for teaching and research, XYZ attracts students and scholars from across the globe, with almost a quarter of our students are from outside. More than 130 nationalities are represented among a student population of over 18,000.
          
          XYZ is a collegiate university, with 39 self-governing colleges related to the University in a type of federal system. There are also seven Permanent Private Halls, founded by different Hindu denominations. Thirty colleges and all halls admit students for both undergraduate and graduate degrees. Seven other colleges are for graduate students only; one has Fellows only, and one specializes in part-time and continuing education. "
          />

          <AboutUsTemplate
            title="OUR ETHOS"
            content="
Our foremost objective is to provide a happy and safe environment for the students which will foster learning and development. We work to ensure a strong foundation in academics as well as social, emotional and physical development of the students. Care, tolerance, hard work, honesty, self discipline are used as pillars for the foundation of students community, thereby enabling them to become moral, spiritual and responsible citizens.

In XYZ we beleive in continioius growth of the student acadmically and with 50+ extra curriculom activity.
We are an institution where excellence is a tradition and we believe that each student is special and has the potential to excel in many different spheres.

The extracurricular activities emphasize at forging friendship and team spirit. These help to develop mental and physical strengths. We maintain a balance that matches the student's maturity, skill and his / her interests by breaking the monotony of routine student life. Thus, at this impressionable age the student will learn values such as discipline, responsibility, accountability, confidence and sacrifice thereby ensuring their positive role in the societ 

In conformity to our motto, we aim to provide quality education in Humanities, Commerce and Science. Through carefully crafted interaction and activities both within and outside the classrooms, we provide experiences that help the student to discover innate capabilities, set life long goals and proactively work towards their fulfillment. The College has as its backbone excellent infrastructure, updated teaching laboratories, large number of playgrounds and ample facilities for the students in the hostel and classrooms."
          />
          <AboutUsTemplate
            title="Features"
            content="<strong>Bording Facilities</strong>
XYZ Boarding House, is a beautiful state of the art boarding house which is the students second home where everyone is incredibly friendly and caring.
<br/>
<br/>
<strong>Hospital Facilities</strong>
The college has fully equipped 30 bedded hospital with a medical officer and trained nurses living in the campus. Specialist doctors on call and on college retainer.
<br/>
<br/>
<strong>Mess Facilities</strong>
The college has a big Dining Hall namely, Sarangarh Dining Hall which was inaugurated by Dr. Rajendra Prasad, the then President of India, where over 600 students can be served meals at a time. The boarders have their meals in the mess together. It provides both vegetarian and non-vegetarian food, cooked in separate kitchens.
<br/>
<br/>
<strong>Educational Facilities</strong>
The educational facilities are a combination of classroom as well as sports facilities. The role they play in influencing the education, academic achievements and child health and well-being are all taken into account.
"
          />
        </div>
        <AboutUsTemplate
          title="Contact Us"
          content="Centre for Development of Advanced Computing
          Pune University Campus, Ganesh Khind
          Pune - 411 007
          Maharashtra (India)
          Phone:+91-20-2570-4100, Fax: +91-20-2569 4004"          
        />
      </div>
    </div>
  );
};

export default AboutUs;
