import { configureStore } from "@reduxjs/toolkit";
import advertsReducer from "./adverts-redux/advertsSlice";

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
  },
});


export default store;