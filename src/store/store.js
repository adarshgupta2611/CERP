import { configureStore } from "@reduxjs/toolkit";
import loginStore from "./LoginStore";
import SignupStore from "./SignupStore";
import AttendanceStore from "./AttendanceStore";
import ProfileStore from "./ProfileStore";

const store = configureStore({
  reducer : {
    login: loginStore.reducer,
    signup : SignupStore.reducer,
    attendance : AttendanceStore.reducer,
    profile : ProfileStore.reducer
  }
});

export default store;