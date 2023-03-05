import { createSlice } from "@reduxjs/toolkit";

const initialState = {courseId:[],courseName:[]};

const courseStore = createSlice({
  name:'course',
  initialState,
  reducers:{
    changeCourseId(state,action){
      state.courseId = action.payload;
    },
    changeCourseName(state,action){
      state.courseName = action.payload;
    }
  }
});

export const courseActions = courseStore.actions;
export default courseStore;