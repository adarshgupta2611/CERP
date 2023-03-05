import { configureStore } from "@reduxjs/toolkit";
import loginStore from "./LoginStore";
import SignupStore from "./SignupStore";
import AttendanceStore from "./AttendanceStore";
import ProfileStore from "./ProfileStore";
import adminLoginStore from "./AdminLoginStore";
import courseStore from "./CourseStore";
import subjectStore from "./SubjectStore";

const store = configureStore({
  reducer : {
    login: loginStore.reducer,
    signup : SignupStore.reducer,
    attendance : AttendanceStore.reducer,
    profile : ProfileStore.reducer,
    adminLogin : adminLoginStore.reducer,
    course : courseStore.reducer,
    subject : subjectStore.reducer
  }
});

export default store;