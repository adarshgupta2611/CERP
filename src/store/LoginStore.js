import { createSlice } from "@reduxjs/toolkit";

const initialState = {em : "",pwd:"",isValid:false};

const loginStore = createSlice({
  name:'login',
  initialState,
  reducers:{
    loginValid(state){
      state.isValid = true;
    },
    loginInvalid(state){
      state.isValid = false;
    },
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