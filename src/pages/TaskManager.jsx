import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AddNew from '../toDos/AddNew'
import TasksContainer from '../toDos/TasksContainer'
import { getTaskList } from '../apiCalls'
import { setState } from '../reducer/toDosReducer';

function TaskManager () {

  const dispatch = useDispatch()

  const getTasks = async () => {
    const array = await getTaskList();
    if (array) {
      dispatch(setState(array))
    }
  }

  useEffect(() => {

    getTasks();

  }, [])

  return (
    <div className='m-3'>
      <h4 className='brand-name mx-1'>To Doose:</h4>
      <AddNew />
      <TasksContainer />
    </div>
  )
}

export default TaskManager