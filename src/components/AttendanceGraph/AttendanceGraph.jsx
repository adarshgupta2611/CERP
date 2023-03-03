import React, { useState,useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { CDBContainer } from 'cdbreact';
import Chart from 'chart.js/auto';
import styles from "./AttendanceGraph.module.css"
import { useSelector } from 'react-redux';

const AttendanceGraph = (props) => {
  const data = useSelector((store)=>store.attendance);


  return (
    <div className={styles.outer}>
    <CDBContainer>
      {/* <h3 className="mt-5">Attendace Graph</h3> */}
      <Bar data={data} options={{ responsive: true }} />
    </CDBContainer>
    </div>
  );
};

export default AttendanceGraph;