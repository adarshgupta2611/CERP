import { createSlice } from "@reduxjs/toolkit";

const initialState = {subjectId:[],subjectName:[]};

const subjectStore = createSlice({
  name:'subject',
  initialState,
  reducers:{
    changeSubjectId(state,action){
      state.subjectId = action.payload;
    },
    changeSubjectName(state,action){
      state.subjectName = action.payload;
    }
  }
});

export const subjectActions = subjectStore.actions;
export default subjectStore;