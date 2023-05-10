import React from 'react'
import DeleteTask from './DeleteTask'
import MarkComplete from './MarkComplete'
import EditTask from './EditTask'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'

function TaskTemplate(props) {

    const { toDo, index, handleDragStart, handleDrop, handleDragOver, handleDragEnter, handleDragLeave } = props;

    const options = {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit"
    }

    return (
        <div data-index={index} className='d-flex m-3' id={toDo.id}
            onDrop={() => handleDrop(toDo.id)}
            onDragOver={(e) => handleDragOver(e, toDo.id)}
            onDragEnter={() => handleDragEnter(index, toDo.id)}
            onDragLeave={() => handleDragLeave(toDo.id)}
        >
        <MarkComplete item={toDo} />
        <span className='my-1 mx-3'>{index + 1}</span>
        <div draggable={toDo.complete === false ? 'true' : 'false'} onDragStart={(e) => handleDragStart(e, index)} className='p-1'>
        {toDo.complete === false 
            ? <FontAwesomeIcon icon={faGripLines} style={{color: 'gray'}} className='moveTask'/>
            : null
        }
          <span className='mx-3'>{toDo.task}</span>
          <span className='mx-3'>{toDo.date ? new Date(toDo.date).toLocaleString('en-GB', options) : null}</span>
          <EditTask item={toDo} index={index} />
          <DeleteTask id={toDo.id} />
        </div>
      </div>
    )
}

export default TaskTemplate