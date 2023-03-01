import { configureStore } from "@reduxjs/toolkit";
import loginStore from "./LoginStore";
import SignupStore from "./SignupStore";

const store = configureStore({
  reducer : {
    login: loginStore.reducer,
    signup : SignupStore.reducer
  }
});

export default store;