import React, { Fragment } from "react";
import Header from "../Header/Header";
import {
  ScheduleComponent,
  Inject,
  Day,
  Month,
  Week,
  WorkWeek,
  Agenda,
} from "@syncfusion/ej2-react-schedule";
// import { DataManager, UrlAdaptor } from "@syncfusion/ej2-data";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const TimeTableStudent = () => {
  const [localData,setLocalData] = useState([{Id:1000,
    EndTime : new Date(2023,2,11,9,30),
    StartTime : new Date(2023,2,11,9,0),
    Location: 301,
    Subject : "DBMS",
  IsReadonly:true}])

  const param = useParams();
  const course = useSelector(store=>store.profile.course)

  // let dataManager = new DataManager({
  //   url: "http://localhost:8080/Home/GetData", // 'controller/actions'
  //   crudUrl: "Home/UpdateData",
  //   adaptor: new UrlAdaptor(),
  // });


  useEffect(()=>{
    const helper = async()=>{
      const response = await axios.get(`http://localhost:8080/schedule/${course}`);
      const data = response.data;
      // console.log(data);
      // console.log(new Date(data[0].startTime))
      const tempLocalData=[];
      // const timezone = new Timezone()
      for (let i = 0; i < data.length; i++) {
        tempLocalData.push({
          Id : data[i].scheduleId,
          EndTime : data[i].endTime,
          StartTime :data[i].startTime,
          Location: data[i].location,
          Subject : data[i].subjectName,
          IsReadonly : true})
      }
      setLocalData(tempLocalData)
      console.log(localData)
    };

    helper();
  },[])

  return (
    <Fragment>
      <Header linkText="Home" hrefText={`/student/${localStorage.getItem("studentToken")}`} linkText2="| Logout" hrefText2="/"></Header>

      <ScheduleComponent
        height="100vh"
        currentView="Week"
        eventSettings={{dataSource:localData}}
        cellClick={(e)=>e.preventDefault()}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}></Inject>
      </ScheduleComponent>
    </Fragment>
  );
};

export default TimeTableStudent;
