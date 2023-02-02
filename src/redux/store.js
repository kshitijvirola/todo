import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
export var store = configureStore({
    reducer: {
    rootReducer: rootReducer,   
    }
})