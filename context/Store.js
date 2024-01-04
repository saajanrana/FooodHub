import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import StoreSlice from "./StoreSlice";



const store = configureStore(
    {
      reducer:{
          auth:AuthSlice,
          store:StoreSlice
      }
    }
)


export default store;