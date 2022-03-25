import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter/studentStore";
import teacherReducer from "./Counter/teachersReducer";
import loginReducer from "./Counter/loginStore";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    teacherslist: teacherReducer,
    login: loginReducer,
  },
});
