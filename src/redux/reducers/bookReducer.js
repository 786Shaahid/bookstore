import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

// 1. INITIALIZE THE STATE 
   const initialState={
           error:'',
           items:[],
           item:{},
           filterInput:'',
           loading:false
   }
//  2. CREATE ACTIONS
export const fetchApi = createAsyncThunk(
    "book/fetchApi",
    async (data, {fulfillWithValue, rejectWithValue }) => {
      try {
        const response = await axios.get("https://d1krvzwx5oquy1.cloudfront.net/books.json");
        // console.log(response);
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
          filterBookItem:(state,action)=>{
            state.filterInput=action.payload
          }
    },
    extraReducers:(builder)=>{
          builder.addCase(fetchApi.pending,(state)=>{
            state.loading=true;
            state.error=''
          })
          .addCase(fetchApi.fulfilled,(state,action)=>{
            state.loading=false;
            console.log('fetch-api-fullfill',action.payload );
            state.items=action.payload
         })
         .addCase(fetchApi.rejected,(state,action)=>{
          console.log('reject-fetch',action.payload);
          state.loading=false;
          state.error='Something went wronge !'
      })
  }     
   })

export const bookReducer = bookSlice.reducer;
export const bookActions = bookSlice.actions;
