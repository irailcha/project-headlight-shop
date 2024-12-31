import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAdverts = createAsyncThunk('adverts/fetchAdverts', async()=>{
try {
  const response = await axios.get('https://backend-headlight-shop.vercel.app/api/adverts');
  if (response.data.length === 0) {
    return { message: "No adverts found" };
  }
  return response.data;
} catch (error) {
  throw new Error(error.message)
}

})

export const getOneAdvert= createAsyncThunk('adverts/getOneAdvert', async(id)=>{
try {
  const response = await axios.get(`https://backend-headlight-shop.vercel.app/api/adverts/${id}`);
  if (response.data.length === 0) {
    return { message: "No adverts found" };
  }
  return response.data;
} catch (error) {
  throw new Error(error.message)
}
});




export const createAdvert = createAsyncThunk('adverts/createAdvert', async (advertData) => {
  try {
    const response = await axios.post('https://backend-headlight-shop.vercel.app/api/adverts', advertData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
});

export const removeAdvert = createAsyncThunk(
  'adverts/removeAdvert',
  async (advertData, { rejectWithValue }) => {
    try {
     await axios.delete(`https://backend-headlight-shop.vercel.app/api/adverts/${advertData}`);
      return { status: 'deleted', id: advertData }; 
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);


