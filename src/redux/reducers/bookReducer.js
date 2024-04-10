import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

// 1. INITIALIZE THE STATE 
   const initialState={
           error:'',
           items:[],
           item:{},
           filterInput:'',
           loading:false,
           isClick:false
   }
//  2. CREATE ASYNCRONOUS ACTIONS
       // 2.a . FETCH BOOK DATA FROM APIs 
export const fetchApi = createAsyncThunk(
    "book/fetchApi",
    async (data, {fulfillWithValue, rejectWithValue }) => {
      try {
        const response = await axios.get("https://d1krvzwx5oquy1.cloudfront.net/books.json");
        return fulfillWithValue(response.data);
      } catch (err) {
        return rejectWithValue(err.response);
      }
    }
  );
     // 2 . B FETCH DATA FOR SINGLE ITEM WHILE ONCLICK ON CARD
export const  fetchItem= createAsyncThunk(
    "book/fetchItem",
    async (data, {fulfillWithValue, rejectWithValue }) => {
      console.log(data);
      try {
        const response = await axios.get(data);
        return fulfillWithValue(response.data);
      } catch (err) {
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
          },
          toggleClick:(state,action)=>{
            // console.log(action.payload);
               state.isClick= action.payload;
          }
    },
    extraReducers:(builder)=>{
          builder.addCase(fetchApi.pending,(state)=>{
            state.loading=true;
            state.error=''
          })
          .addCase(fetchApi.fulfilled,(state,action)=>{
            state.loading=false;
            console.log(action.payload);
            state.items=action.payload
         })
         .addCase(fetchApi.rejected,(state,action)=>{
          state.loading=false;
          state.error='Something went wronge !'
      })
      .addCase(fetchItem.pending,(state,action)=>{
        state.loading=true;
        state.error=''
      })
      .addCase(fetchItem.fulfilled,(state,action)=>{
        
        state.loading=false;
        state.item=action.payload
      })
      .addCase(fetchItem.rejected,(state,action)=>{
        state.loading=false;
        state.error='Something went wronge !'
      })

  }     
   })

export const bookReducer = bookSlice.reducer;
export const bookActions = bookSlice.actions;
