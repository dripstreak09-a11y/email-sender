import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  elements: [
    { id: 0, 
      x: 0, 
      y: 0, 
      width: 0, 
      height: 0,
      image: null,
      action: null,
      background: "#547792",
      border: {
        isEnabled: true,
        borderColor: "transparent",
        borderWidth: "0px",
        borderRadius: [0,0,0,0],
        borderStyle: "solid",
      }
    }
  ]
};
const countSlice = createSlice({
  name: "elments",
  initialState,
  reducers: {
    elementAdd : (state, action) => {
      state.elements.push(action.payload)
    },
    elementDelete: (state, action) => {
      if(state.elements.length > 1){
        state.elements = state.elements.filter(value => value?.id !== action.payload)
      }
    },
    elementUpdate: (state, action) => {
      state.elements = state.elements.map(value=> value?.id === action.payload?.id ? action.payload : value)
    }
  },
});
export const { elementAdd, elementDelete, elementUpdate } = countSlice.actions;
export default countSlice.reducer;