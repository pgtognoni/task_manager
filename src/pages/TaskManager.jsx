import React from 'react'
import AddNew from '../toDos/AddNew'
import DisplayTasks from '../toDos/DisplayTasks'

function TaskManager () {
    
  return (
    <div>
      <AddNew />
      <DisplayTasks />
    </div>
  )
}

export default TaskManager