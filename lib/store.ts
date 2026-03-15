import { configureStore } from "@reduxjs/toolkit";
import elementsReducer from "./slices/elementsSlice";
import selectReducer from "./slices/selectionSlice"
const store = configureStore({
  reducer: {
    elements: elementsReducer,
    selection: selectReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;