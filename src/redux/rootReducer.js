import { combineReducers } from "@reduxjs/toolkit";
import {todoReducer} from '../redux/todoapp/reducers/todoReducer';

export const rootReducer = combineReducers({
    todoReducer: todoReducer,
})