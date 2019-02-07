import { createStore, combineReducers } from "redux";

import liffReducer from "./reducers/liff";

const combinedReducers = combineReducers({ liff: liffReducer });

const store = createStore(combinedReducers);

export default store;
