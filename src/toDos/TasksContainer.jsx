import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import DisplayTasks from './DisplayTasks'
import SearchTask from './SearchTask'

function TasksContainer({ pending, completed }) {

  return (

    <div className='tasks-container'>
      <DisplayTasks pending={pending} completed={completed} />
    </div>
  )
}

export default TasksContainer