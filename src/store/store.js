import { configureStore } from "@reduxjs/toolkit";
import loginStore from "./LoginStore";

const store = configureStore({
  reducer : {
    login: loginStore.reducer
  }
});

export default store;