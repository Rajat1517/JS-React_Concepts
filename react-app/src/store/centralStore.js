import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import dataReducer from "./slices/dataSlice";
import {persistReducer, persistStore, } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfigs= {
    key: "root",
    whitelist: "data",
    storage,
}

const rootReducer = combineReducers({
  data: dataReducer,
});

const persistedReducer= persistReducer(persistConfigs,rootReducer);

export const store = legacy_createStore(persistedReducer, applyMiddleware(thunk));

export const persistor= persistStore(store);


