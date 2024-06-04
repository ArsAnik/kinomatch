import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import {thunk} from "redux-thunk";
import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const reducers = combineReducers({
    user: userReducer
});

const persistConfig = {
    key: 'root',
    storage: storage
};

const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store);
