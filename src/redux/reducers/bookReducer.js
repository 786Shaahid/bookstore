import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

// 1. INITIALIZE THE STATE 
   const initialState={
     
   }
//  2. CREATE ACTIONS
export const fetchApi = createAsyncThunk(
    "book/fetchApi",
    async (data, {fulfillWithValue, rejectWithValue }) => {
      try {
        const response = await axios.get();
        return fulfillWithValue(response.data);
      } catch (err) {
        // console.log(err.response);
        return rejectWithValue(err.response);
      }
    }
  );

 // 3.  CREATE SLICE
 const bookSlice= createSlice({
    name:"book",
    initialState,
    reducers:{
        
    },
})

export const bookReducer = bookSlice.reducer;
export const userActions = bookSlice.actions;
