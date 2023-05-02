import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    task: '',
    id: '',
    complete: false,
    edit: false,
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setTask: (state, action) => (state.task = action.payload),
        setId: (state, action) => (state.id = action.payload),
        setComplete: (state, action) => (state.complete = action.payload),
        setEdit: (state, action) => (state.edit = action.payload),
        setReset: () => initialState
    }
})

export const {
    setTask,
    setId,
    setComplete, 
    setEdit, 
    setReset
} = taskSlice.actions;
export default taskSlice;