import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import DisplayTasks from './DisplayTasks'
import SearchTask from './SearchTask'

function TasksContainer() {

    const toDos = useSelector(state => state.toDos.toDos)
    
    const [ pending, setPending ] = useState([])
    const [ completed, setCompleted ] = useState([]);
    const [ toDoList, setToDoList ] = useState([])

    useEffect(() => {

      setToDoList(toDos)

    }, [toDos])


    useEffect(() => {

      const newPending = toDoList.filter(item => item.complete === false)
      const newCompleted = toDoList.filter(item => item.complete === true)

      setPending(newPending)
      setCompleted(newCompleted)

    }, [toDoList])

  return (

    <div>
      <SearchTask setToDoList={setToDoList} />
      <DisplayTasks pending={pending} completed={completed} />
    </div>
  )
}

export default TasksContainer