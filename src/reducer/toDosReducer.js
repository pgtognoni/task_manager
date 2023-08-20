import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toDos: [],
    events: [],
}

const toDosSlice = createSlice({
    name: 'toDos',
    initialState,
    reducers: {
        setState: (state, action) => {state.toDos = action.payload},
        setEvents: (state, action) => {state.events = action.payload},
        setToDo: (state, action) => {state.toDos.push(action.payload)},
        deleteToDo: (state, action) => {state.toDos = state.toDos.filter(item => item.id !== action.payload)}
    }
})

export const {
    setState,
    setToDo,
    deleteToDo,
    setEvents
} = toDosSlice.actions;

export default toDosSlice;