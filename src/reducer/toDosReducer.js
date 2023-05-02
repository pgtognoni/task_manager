import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toDos: [],
}

const toDosSlice = createSlice({
    name: 'toDos',
    initialState,
    reducers: {
        setToDo: (state, action) => state.toDos = state.toDos.push(action.payload),
        deleteToDo: (state, action) => state.toDos = state.toDos.filter(item => item.id !== action.payload)
    }
})

export const {
    setToDo,
    deleteToDo
} = toDosSlice.actions;

export default toDosSlice;