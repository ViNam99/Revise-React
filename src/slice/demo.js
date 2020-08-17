import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "demo",
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state) => {
      state.count += 1
    },
  },
});
const { reducer, actions } = countSlice;
export const  {increment} = actions
export default reducer;
