import { createSlice } from "@reduxjs/toolkit";

export const web3 = createSlice({
  name: "web3",
  initialState: {
    address: ""
  },
  reducers: {
    setvalue: (state, action)=>{
        const value = action.payload
        console.log(value,"______________");
        state.address = action.payload;
    },

    deleteValue:(state, action)=>{
        state.address = null;
    }

  },
});

console.log(web3);

export const { setvalue, deleteValue } = web3.actions;

export default web3.reducer;
