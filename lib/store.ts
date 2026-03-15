import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./slices/countSlice";
import selectReducer from "./slices/selectionSlice"
const store = configureStore({
  reducer: {
    count: countReducer,
    selection: selectReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;