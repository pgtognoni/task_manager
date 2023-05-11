import React from 'react'
import AddNew from '../toDos/AddNew'
import TasksContainer from '../toDos/TasksContainer'

function TaskManager () {
    
  return (
    <div className='m-3'>
      <h4 className='brand-name mx-1'>To Doose:</h4>
      <AddNew />
      <TasksContainer />
    </div>
  )
}

export default TaskManager