import { configureStore } from "@reduxjs/toolkit";
import advertsReducer from "./adverts-redux/advertsSlice";
import messageReducer from "./message-redux/messageSlice";

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    message: messageReducer,
  },
});


export default store;