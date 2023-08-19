import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddNew from '../toDos/AddNew'
import TasksContainer from '../toDos/TasksContainer'
import SearchTask from '../toDos/SearchTask'
import { getTaskList } from '../apiCalls'
import { setState } from '../reducer/toDosReducer';


function TaskManager () {

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
    <div className='tasks-container'>
      <div className='d-flex flex-column flex-sm-row justify-content-center gap-3'>
        <AddNew />
        <SearchTask setToDoList={setToDoList} />
      </div>
      <TasksContainer pending={pending} completed={completed} />
    </div>
  )
}

export default TaskManager