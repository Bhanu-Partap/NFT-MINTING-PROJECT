import { createSlice } from "@reduxjs/toolkit";

export const accounts = createSlice({
  name: "accounts",
  initialState: {
    address: ""
  },
  reducers: {
    setvalueacc: (state, action)=>{
        state.address = action.payload;
    },

    deleteValueacc:(state, action)=>{
        state.address = null;
    }
  },
});

export const { setvalueacc, deleteValueacc } = accounts.actions;

export default accounts.reducer;
