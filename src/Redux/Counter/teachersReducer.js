import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      key: "1",
      name: "Mr . John",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Mrs. Jim",
      age: 42,
      address: "London No. 1 Lake Park",
    },
  ],
};

export const teacherListReducer = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    addTeacher: (state, action) => {
      state.value.push(action.payload[0]);
    },
    removeTeacher: (state, action) => {
      state.value = state.value.filter((todo) => todo.key !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTeacher, removeTeacher } = teacherListReducer.actions;

export default teacherListReducer.reducer;
