import { combineReducers } from "redux";

import { uiReducer } from "./uiReducer";


export const rootReduccer = combineReducers({
    ui: uiReducer,

})