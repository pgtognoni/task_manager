import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setTask, setId, setReset } from '../reducer/taskReducer';
import { setToDo } from '../reducer/toDosReducer';
import { v4 as uuidv4 } from "uuid";


function AddNew() {

    const task = useSelector(state => state.task.task)
    const dispatch = useDispatch();

    const handleTaskChange = (task) => {
        dispatch(setTask(task))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(setId(uuidv4()))
        dispatch(setToDo(task))
        dispatch(setReset())
    }

  return (
    <div>
        <h2>Add New</h2>
        <form onSubmit={e => handleSubmit(e)}>
            <label htmlFor='task'>
                <input type='text' name='task' value={task} onChange={e => handleTaskChange(e.target.value)} />
            </label>
            <button>Add</button>
        </form>
    </div>
  )
}

export default AddNew