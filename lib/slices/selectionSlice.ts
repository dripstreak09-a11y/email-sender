import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selectionId: 0
};
const countSlice = createSlice({
  name: "select",
  initialState,
  reducers: {

    setSelectionId: (state, action) => {
      state.selectionId = action.payload
    }
  },
});
export const { setSelectionId} = countSlice.actions;
export default countSlice.reducer;