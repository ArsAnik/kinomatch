import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import {thunk} from "redux-thunk";
import storage from 'redux-persist/lib/storage'
import {persistReducer} from "redux-persist";

const reducers = combineReducers({
    user: userReducer
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
} )
