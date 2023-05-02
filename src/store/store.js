import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "../reducer/taskReducer";
import toDosSlice from "../reducer/toDosReducer";

const store = configureStore({
    reducer: {
        task: taskSlice.reducer,
        toDos: toDosSlice.reducer
    }
});

export default store;