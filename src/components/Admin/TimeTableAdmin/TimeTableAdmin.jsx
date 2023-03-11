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
  EventSettingsModel,
} from "@syncfusion/ej2-react-schedule";
import { DataManager, UrlAdaptor } from "@syncfusion/ej2-data";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const TimeTableAdmin = () => {
  const [localData,setLocalData] = useState([{
    EndTime : new Date(2023,2,11,6,0),
    StartTime : new Date(2023,2,11,4,0),
    Subject : "DBMS"}
    // IsReadonly : true,
    ,{
      EndTime : new Date(2023,2,10,6,0),
      StartTime : new Date(2023,2,10,4,0),
      Subject : "Java",
      // IsReadonly : true,}
  }])

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
    }
    if (args.requestType === "eventChanged") {
      // This block is execute after an appointment change
    }
    if (args.requestType === "eventRemoved") {
      // This block is execute after an appointment remove
    }
  };

  useEffect(()=>{

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
