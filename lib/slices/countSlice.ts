import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  textBoxes: [
    { id: 1, x: 100, y: 100, width: 300, height: 80 },
    { id: 2, x: 200, y: 200, width: 300, height: 80 }
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