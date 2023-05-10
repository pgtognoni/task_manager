import React from 'react'
import AddNew from '../toDos/AddNew'
import TasksContainer from '../toDos/TasksContainer'

function TaskManager () {
    
  return (
    <div>
      <AddNew />
      <TasksContainer />
    </div>
  )
}

export default TaskManager