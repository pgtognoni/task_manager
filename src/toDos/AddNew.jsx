import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setToDo } from '../reducer/toDosReducer';
import { v4 as uuidv4 } from "uuid";


function AddNew() {

    const [ task, setTask ] = useState('')

    const dispatch = useDispatch();

    const handleSubmit = (event) => {

        event.preventDefault();
        
        const toDo = {
            id: uuidv4(),
            task: task,
            complete: false,
        }

        dispatch(setToDo(toDo))
        setTask('')
    }

  return (
    <div>
        <h2>Add New</h2>
        <form onSubmit={e => handleSubmit(e)}>
            <label htmlFor='task'>
                <input type='text' name='task' value={task} onChange={e =>  setTask(e.target.value)} />
            </label>
            <button>Add</button>
        </form>
    </div>
  )
}

export default AddNew