import React from 'react'
import DeleteTask from './DeleteTask'
import EditTask from './EditTask'
import MarkComplete from './MarkComplete'

function Completed({completed}) {

  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }

  return (
    <div>
      {completed.length ?
      <>
      <h4>Completed</h4>
      {
        completed.map((toDo, index) => {
          return(
            <div key={toDo.id} className='d-flex m-3'>
              <MarkComplete item={toDo} />
              <span className='my-1 mx-3'>{index + 1}</span>
              <div className='p-1'>
                <span className='mx-3'>{toDo.task}</span>
                <span className='mx-3'>{toDo.date ? new Date(toDo.date).toLocaleString('en-GB', options) : null}</span>
                <EditTask item={toDo} />
                <DeleteTask id={toDo.id} />
              </div>
            </div>
          )
        })
      }
      </>
      : null
      }
    </div>
  )
}

export default Completed