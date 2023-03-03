import { createSlice } from "@reduxjs/toolkit";

const initialState = {em : "",pwd:""};

const loginStore = createSlice({
  name:'login',
  initialState,
  reducers:{
    changeEm(state,action){
      state.em = action.payload;
    },
    changePwd(state,action){
      state.pwd = action.payload;
    }
  }
});

export const loginActions = loginStore.actions;
export default loginStore;