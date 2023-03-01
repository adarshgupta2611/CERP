import { createSlice } from "@reduxjs/toolkit";

const initialState = {firstName : "",lastName:"", address: "",email: "", password: "",courseId: "",gender : ""};

const SignupStore = createSlice({
  name:'Signup',
  initialState,
  reducers:{
    changeEmail(state,action){
      state.email = action.payload;
    },
    changePassword(state,action){
      state.password = action.payload;
    },
    changeFname(state,action){
      state.firstName = action.payload;
    },
    changeLname(state,action){
      state.lastName = action.payload;
    },
    changeAddress(state,action){
      state.address = action.payload;
    },
    changeCourse(state,action){
      state.courseId = action.payload;
    },
    changeGender(state,action){
      state.gender = action.payload;
    },
  }
});

export const SignupActions = SignupStore.actions;
export default SignupStore;