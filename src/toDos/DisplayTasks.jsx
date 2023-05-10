import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setState } from '../reducer/toDosReducer';
import TaskTemplate from './TaskTemplate';
import TooglePending from './TooglePending';


function DisplayTasks({ pending, completed }) {

  const dispatch = useDispatch();

  const [ dropIndex, setDropIndex ] = useState(null)
  const [ startIndex, setStartIndex ] = useState(null)
  const [ showPending, setShowPending ] = useState(true)

  const handleDragStart = (e, index) => {
    setStartIndex(index)
  }

  const handleDrop = (id) => {
    let newArray = [...pending] 
    const item = newArray.splice(startIndex, 1)[0]
    newArray.splice(dropIndex, 0, item)
    dispatch(setState(newArray))
    document.getElementById(id).classList.remove('drag')
  }

  const handleDragOver = (e, id) => {
    e.preventDefault()
    document.getElementById(id).classList.add('drag')
  }

  const handleDragEnter = (index, id) => {
    document.getElementById(id).classList.add('drag')
    setDropIndex(index)
  }

  const handleDragLeave = (id) => {
    document.getElementById(id).classList.remove('drag')
  }

  return (
    <div className='my-3'>
      <TooglePending setShowPending={setShowPending} showPending={showPending} />
      <>
      <h4>To Do</h4>
      <h6>{showPending ? `Pending: ${pending.length}` : `Completed: ${completed.length}`}</h6>
        {showPending  
          ? pending.map((toDo, index) => {
            return(
                <TaskTemplate 
                  toDo={toDo} 
                  index={index} 
                  key={toDo.id} 
                  handleDragStart={handleDragStart}
                  handleDrop={handleDrop}
                  handleDragOver={handleDragOver}
                  handleDragEnter={handleDragEnter}
                  handleDragLeave={handleDragLeave}
                />
            )
          })
          : completed.map((toDo, index) => {
            return(
                <TaskTemplate 
                  toDo={toDo} 
                  index={index} 
                  key={toDo.id} 
                />
            )
          })
        }
      </>
    </div>
  )
}

export default DisplayTasks