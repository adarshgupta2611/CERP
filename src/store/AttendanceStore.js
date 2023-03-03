import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
    // {
    //   label: 'Absent',
    //   backgroundColor: 'rgba(194, 116, 161, 0.5)',
    //   borderColor: 'rgb(194, 116, 161)',
    //   data: [65, 59, 90, 81, 56, 55, 40],
    // },
    {
      label: 'Present',
      backgroundColor: 'rgba(71, 225, 167, 0.5)',
      borderColor: 'rgb(71, 225, 167)',
      data: [28, 48, 40, 19, 96, 27, 100],
    },
  ]
};

const AttendanceStore = createSlice({
  name:'attendance',
  initialState,
  reducers:{
    changeLabel(state,action){
      state.labels = action.payload;
    },
    changeDatasets(state,action){
      state.datasets[0].data = action.payload;
    }
  }
});

export const attendanceActions = AttendanceStore.actions;
export default AttendanceStore;