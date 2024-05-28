import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import fileReducer from "./fileReducer";
import {thunk} from "redux-thunk";
import {composeWithDevTools} from "@redux-devtools/extension";

export const store = configureStore({
    reducer:{user: userReducer, files: fileReducer,},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
} )
