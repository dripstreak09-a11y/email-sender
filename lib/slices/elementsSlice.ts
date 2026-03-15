import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  textBoxes: [
    { id: 1, x: 0, y: 0, width: 600, height: 80 },
    { id: 2, x: 0, y: 100, width: 600, height: 80 },
    { id: 3, x: 0, y: 200, width: 600, height: 80 }
  ]
};
const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    textBoxCountInc : (state, action) => {
      state.textBoxes.push(action.payload)
    }
  },
});
export const { textBoxCountInc } = countSlice.actions;
export default countSlice.reducer;