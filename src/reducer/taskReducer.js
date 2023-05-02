import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    task: '',
    id: '',
    complete: false,
    edit: false,
}

const taskSlice = createSlice({
    name: 'taskReducer',
    initialState,
    reducers: {
        setState: (state, action) => {state = action.payload},
        setTask: (state, action) => {state.task = action.payload},
        setId: (state, action) => {state.id = action.payload},
        setComplete: (state, action) => {state.complete = action.payload},
        setEdit: (state, action) => {state.edit = action.payload},
        setReset: () => initialState
    }
})

export const {
    setState,
    setTask,
    setId,
    setComplete, 
    setEdit, 
    setReset
} = taskSlice.actions;
export default taskSlice;