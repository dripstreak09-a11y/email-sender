import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0
};
const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    inc_count: (state) => {
        state.count = state.count + 1;
    },
    dec_count: (state) => {
        state.count = state.count - 1;
    }
  },
});
export const { inc_count, dec_count } = countSlice.actions;
export default countSlice.reducer;