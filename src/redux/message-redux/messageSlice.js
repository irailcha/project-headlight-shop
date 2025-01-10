import { createSlice } from "@reduxjs/toolkit";
import { sendMessage} from "../message-redux/operations";


const messageSlice = createSlice({
  name: 'message',
  initialState: {
    messages: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers:(builder)=>{
    builder
    .addCase(sendMessage.pending, (state) => {
      state.loading = true;
    })
   .addCase(sendMessage.fulfilled, (state, action) => {
     state.messages.push(action.payload);
     state.error = null;
   })
   .addCase(sendMessage.rejected, (state, action) => {
     state.error = action.error.message;
   })
  }
})


export default messageSlice.reducer