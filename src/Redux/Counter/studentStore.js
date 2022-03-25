import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      key: "1",
      name: "John Brown",
      age: 18,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 17,
      address: "London No. 1 Lake Park",
    },
  ],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.value.push(action.payload[0]);
    },
    removeStudent: (state, action) => {
      state.value = state.value.filter((todo) => todo.key !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addStudent, removeStudent } = counterSlice.actions;

export default counterSlice.reducer;
