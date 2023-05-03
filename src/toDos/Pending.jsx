import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setToDo, setState } from '../reducer/toDosReducer';
import DeleteTask from './DeleteTask'
import MarkComplete from './MarkComplete'
import EditTask from './EditTask'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'


function Pending({pending}) {

  const dispatch = useDispatch();

  const [ dropIndex, setDropIndex ] = useState(null)
  const [ startIndex, setStartIndex ] = useState(null)

  const handleDragStart = (e, index) => {
    // document.getElementById(index).classList.add('drag')
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

  const handleDragLeave = (index, id) => {
    document.getElementById(id).classList.remove('drag')
    // setDropIndex(null)
  }

  return (
    <div className='my-3'>
      {pending.length ?
      <>
      <h4>To Do</h4>
        {
          pending.map((toDo, index) => {
            return(
              <div key={toDo.id} data-index={index} className='d-flex m-3' id={toDo.id}
                onDrop={() => handleDrop(toDo.id)}
                onDragOver={(e) => handleDragOver(e, toDo.id)}
                onDragEnter={() => handleDragEnter(index, toDo.id)}
                onDragLeave={() => handleDragLeave(index, toDo.id)}
              >
                <MarkComplete item={toDo} />
                <span className='my-1 mx-3'>{index + 1}</span>
                <div draggable='true' onDragStart={(e) => handleDragStart(e, index)} className='p-1'>
                  <FontAwesomeIcon icon={faGripLines} style={{color: 'gray'}} className='moveTask'/>
                  <span className='mx-3'>{toDo.task}</span>
                  <EditTask item={toDo} index={index} />
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

export default Pending