import { configureStore } from "@reduxjs/toolkit";
import toDosSlice from "../reducer/toDosReducer";

const store = configureStore({
    reducer: {
        toDos: toDosSlice.reducer
    }
});

export default store;