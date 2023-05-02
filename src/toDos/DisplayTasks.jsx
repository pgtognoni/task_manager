import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setComplete, setState } from '../reducer/taskReducer'
import { setToDo, deleteToDo } from '../reducer/toDosReducer'

function DisplayTasks() {

    const toDos = useSelector(state => state.toDos.toDos)

    const dispatch = useDispatch()
    
    const [ pending, setPending ] = useState([])
    const [ completed, setCompleted ] = useState([]);

    useEffect(() => {

      const newPending = toDos.filter(item => item.complete === false)
      const newCompleted = toDos.filter(item => item.complete === true)

      setPending(newPending)
      setCompleted(newCompleted)

    }, [toDos])


    const handleCheckbox = (e, item) => {
      e.preventDefault()
      let newItem = {...item, complete: true}
      dispatch(deleteToDo(item.id))
      dispatch(setToDo(newItem))
    }

  return (

    <div>
      <h1>Pending</h1>
        {
          pending.map(toDo => {
            return(
              <div key={toDo.id}>
              <p>{toDo.task}</p>
              <input type='checkbox' onChange={(e) => handleCheckbox(e, toDo)} />
              </div>
            )
          })
        }
      <h1>Complete</h1>
      {
          completed.map(toDo => {
            return(
              <p key={toDo.id}>{toDo.task}</p>
            )
          })
        }
    </div>
  )
}

export default DisplayTasks