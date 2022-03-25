import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      key: "1",
      name: "admin",
      password: "admin",
    },
  ],
};

export const counterSlice = createSlice({
  name: "login",
  initialState,
});

// Action creators are generated for each case reducer function

export default counterSlice.reducer;
