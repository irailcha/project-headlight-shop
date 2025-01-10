import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";




export const sendMessage = createAsyncThunk(
  'messages/sendMessage',
  async ({ advertId, phone, message }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://backend-headlight-shop.vercel.app/api/messages/${advertId}/send`,
        {
          phone,
          message,
          is_admin: false, // Завжди false, оскільки це повідомлення від клієнта
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  }
);
