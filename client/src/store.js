import { configureStore } from "@reduxjs/toolkit";
import repertoireReducer from "./reducers/repertoireReducer";
import errorNotificationReducer from "./reducers/errorNotificationReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
    reducer: {
        repertoire: repertoireReducer,
        errorNotification: errorNotificationReducer,
        user: userReducer
    },
});

export default store;