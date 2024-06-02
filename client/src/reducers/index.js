import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import {thunk} from "redux-thunk";
import storage from 'redux-persist/lib/storage'
import {persistReducer} from "redux-persist";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const reducers = combineReducers({
    user: userReducer
});

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
} )
