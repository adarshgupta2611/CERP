import React, { Fragment } from "react";
import Header from "../HeaderAdmin/Header";
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

const TimeTableAdmin = () => {
  const [localData,setLocalData] = useState([{Id:1000,
    EndTime : new Date(2023,2,11,6,0),
    StartTime : new Date(2023,2,11,4,0),
    Location: 301,
    Subject : "DBMS"}])

  const param = useParams();

  // let dataManager = new DataManager({
  //   url: "http://localhost:8080/Home/GetData", // 'controller/actions'
  //   crudUrl: "Home/UpdateData",
  //   adaptor: new UrlAdaptor(),
  // });

  const onActionComplete = (args) => {
    console.log(args);
    if (args.requestType === "toolBarItemRendered") {
      // This block is execute after toolbarItem render
    }
    if (args.requestType === "dateNavigate") {
      // This block is executed after previous and next navigation
    }
    if (args.requestType === "viewNavigate") {
      // This block is execute after view navigation
    }
    if (args.requestType === "eventCreated") {
      // setLocalData((prev)=>{
      //   return [...prev,{EndTime : args.addedRecords[0].EndTime,
      //     StartTime : args.addedRecords[0].StartTime,
      //     Subject : args.addedRecords[0].Subject}]
      // })
      const startTimeData = new Date(args.addedRecords[0].StartTime.getTime() + 5.5*60*60*1000)
      const endTimeData = new Date(args.addedRecords[0].EndTime.getTime() + 5.5*60*60*1000)

      const obj = {startTime : startTimeData,endTime : endTimeData, location : args.addedRecords[0].Location, subjectName : args.addedRecords[0].Subject}
      console.log(obj);
      const response = axios.post(`http://localhost:8080/schedule/${param.cn}`,obj);
    }
    if (args.requestType === "eventChanged") {
      // This block is execute after an appointment change
      const startTimeData = new Date(args.changedRecords[0].StartTime.getTime() + 5.5*60*60*1000)
      const endTimeData = new Date(args.changedRecords[0].EndTime.getTime() + 5.5*60*60*1000)

      const obj = {startTime : startTimeData,endTime : endTimeData,scheduleId : args.changedRecords[0].Id, location : args.changedRecords[0].Location, subjectName : args.changedRecords[0].Subject}
      console.log(obj);
      const response = axios.put(`http://localhost:8080/schedule/${param.cn}`,obj);
    }
    if (args.requestType === "eventRemoved") {
      // This block is execute after an appointment remove
      const startTimeData = new Date(args.deletedRecords[0].StartTime.getTime() + 5.5*60*60*1000)
      const endTimeData = new Date(args.deletedRecords[0].EndTime.getTime() + 5.5*60*60*1000)

      const obj = {startTime : startTimeData,endTime : endTimeData,scheduleId : args.deletedRecords[0].Id, location : args.deletedRecords[0].Location, subjectName : args.deletedRecords[0].Subject}
      console.log(obj);
      const response = axios.delete(`http://localhost:8080/schedule/${param.cn}`,obj); 
    }
  };

  useEffect(()=>{
    const helper = async()=>{
      const response = await axios.get(`http://localhost:8080/schedule/${param.cn}`);
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
          Subject : data[i].subjectName})
      }
      setLocalData(tempLocalData)
      console.log(localData)
    };

    helper();
  },[])

  return (
    <Fragment>
      <Header
        linkText="Home"
        hrefText={`/admin/${localStorage.getItem("adminToken")}`}
        linkText2="| Logout"
        hrefText2="/admin"
      ></Header>

      <ScheduleComponent
        height="100vh"
        currentView="Month"
        eventSettings={{dataSource:localData}}
        actionComplete={onActionComplete}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}></Inject>
      </ScheduleComponent>
    </Fragment>
  );
};

export default TimeTableAdmin;
