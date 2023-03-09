import React, { Fragment } from "react";
import Header from "../HeaderAdmin/Header";
import { ScheduleComponent,Inject,Day,Month,Week,WorkWeek,Agenda,EventSettingsModel} from "@syncfusion/ej2-react-schedule";
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { useState } from "react";

const TimeTableAdmin = () => {
  const [localData,setLocalData] = useState({dataSource : [{
    EndTime : new Date(2023,2,9,6,0),
    StartTime : new Date(2023,2,9,4,30),
    Subject : "DSA",
    // IsReadonly : true,
  }]})

  let dataManager = new DataManager({
    url: 'http://localhost:8080/Home/GetData', // 'controller/actions'
    crudUrl: 'Home/UpdateData',
    adaptor: new UrlAdaptor
});

const onActionComplete=(args)=>{
  console.log(args);
   if (args.requestType === 'toolBarItemRendered') {
          // This block is execute after toolbarItem render
      }
      if (args.requestType === 'dateNavigate') {
          // This block is executed after previous and next navigation
      }
      if (args.requestType === 'viewNavigate') {
          // This block is execute after view navigation
      }
      if (args.requestType === 'eventCreated') {
          // This block is execute after an appointment create
      }
      if (args.requestType === 'eventChanged') {
          // This block is execute after an appointment change
      }
      if(args.requestType === 'eventRemoved') {
          // This block is execute after an appointment remove
      }
}

  return (
    <Fragment>
      <Header
        linkText="Home"
        hrefText={`/admin/${localStorage.getItem("adminToken")}`}
        linkText2="| Logout"
        hrefText2="/admin"
      ></Header>
      
      <ScheduleComponent height="100vh" currentView="Month" eventSettings={localData} actionComplete={onActionComplete}>
        <Inject services={[Day,Week,WorkWeek,Month,Agenda]}></Inject>
      </ScheduleComponent>
    </Fragment>
  );
};

export default TimeTableAdmin;
