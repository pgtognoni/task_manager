import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Pending from './TaskPending'
import Completed from './TaskCompleted'

function DisplayTasks() {

    const toDos = useSelector(state => state.toDos.toDos)
    
    const [ pending, setPending ] = useState([])
    const [ completed, setCompleted ] = useState([]);


    useEffect(() => {

      const newPending = toDos.filter(item => item.complete === false)
      const newCompleted = toDos.filter(item => item.complete === true)

      setPending(newPending)
      setCompleted(newCompleted)

    }, [toDos])

  return (

    <div>
      <Pending pending={pending} />
      <Completed completed={completed} />
    </div>
  )
}

export default DisplayTasks