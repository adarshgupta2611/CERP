import { createSlice } from "@reduxjs/toolkit";

const initialState = {em : "",pwd:"",isAuth:false};

const loginStore = createSlice({
  name:'login',
  initialState,
  reducers:{
    changeEm(state,action){
      state.em = action.payload;
    },
    changePwd(state,action){
      state.pwd = action.payload;
    },
    changeIsAuthFalse(state){
      state.isAuth = false;
    },
    changeIsAuthTrue(state){
      state.isAuth = true;
    }
  }
});

export const loginActions = loginStore.actions;
export default loginStore;