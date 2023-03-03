import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fname : "",
  lname : "",
  email : "",
  gender : "",
  course : "",
  address : "",
};

const ProfileStore = createSlice({
  name:'profile',
  initialState,
  reducers:{
    changeEmail(state,action){
      state.email = action.payload;
    },
    changeFname(state,action){
      state.fname = action.payload;
    },
    changeLname(state,action){
      state.lname = action.payload;
    },
    changeAddress(state,action){
      state.address = action.payload;
    },
    changeCourse(state,action){
      state.course = action.payload;
    },
    changeGender(state,action){
      state.gender = action.payload;
    }
  }
});

export const profileActions = ProfileStore.actions;
export default ProfileStore;