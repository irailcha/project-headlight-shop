import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts, getOneAdvert} from "./operations";


const advertsSlice=createSlice({
  name: 'adverts',
  initialState: {
    adverts: [],
    advert: null,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers:(builder)=>{
    builder
    .addCase(fetchAdverts.pending, (state)=>{
      state.loading=true;
    })
    .addCase(fetchAdverts.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.message) {
        state.error = action.payload.message;
        state.adverts = [];
      } else {
        state.adverts = action.payload;
      }
    })
    .addCase(fetchAdverts.rejected, (state, action)=>{
      state.loading=false;
      state.error=action.error.message;
    })
    .addCase(getOneAdvert.fulfilled, (state, action)=>{
      state.loading = false;
      if (action.payload.message) {
        state.error = action.payload.message;
      } else {
        state.advert = action.payload;
      }
    })
    .addCase(getOneAdvert.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to fetch advert"; 
    })
  }
})

export default advertsSlice.reducer