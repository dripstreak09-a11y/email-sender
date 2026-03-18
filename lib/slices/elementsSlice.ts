import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  textBoxes: [
    { id: 0, 
      x: 0, 
      y: 0, 
      width: 0, 
      height: 0,
      background: "#547792",
      border: {
        isEnabled: true,
        borderColor: "transparent",
        borderWidth: "2px",
        borderRadius: "10px",
        borderStyle: "solid",
      }
    }
  ]
};
const countSlice = createSlice({
  name: "elments",
  initialState,
  reducers: {
    textBoxCountInc : (state, action) => {
      state.textBoxes.push(action.payload)
    },
    textBoxCountDec: (state, action) => {
      state.textBoxes = state.textBoxes.filter(value => value?.id !== action.payload)
    },
    updateTextBox: (state, action) => {
      state.textBoxes = state.textBoxes.map(value=> value?.id === action.payload?.id ? action.payload : value)
    }
  },
});
export const { textBoxCountInc, textBoxCountDec, updateTextBox} = countSlice.actions;
export default countSlice.reducer;