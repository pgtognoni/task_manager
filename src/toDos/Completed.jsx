import React from 'react'
import DeleteTask from './DeleteTask'
import EditTask from './EditTask'
import MarkComplete from './MarkComplete'

function Completed({completed}) {

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
                <span key={toDo.id}>{toDo.task}</span>
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