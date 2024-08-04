import { configureStore } from "@reduxjs/toolkit";

// reducers
import counterReducer from "./features/counter/counterSlice";
import todoReducer from "./features/todo/todoSlice";


// middlware
// logger
import { createLogger } from "redux-logger";
const logger = createLogger()


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})  