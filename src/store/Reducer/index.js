import { combineReducers } from "@reduxjs/toolkit";
import web3 from "./web3";
import accounts from "./accounts";

const rootReducer = combineReducers({
  web3: web3,
  accounts: accounts,
});

export default rootReducer;
