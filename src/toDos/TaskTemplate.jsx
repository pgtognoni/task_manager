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
        <tr data-index={index} id={toDo.id}
            onDrop={() => handleDrop(toDo.id)}
            onDragOver={(e) => handleDragOver(e, toDo.id)}
            onDragEnter={() => handleDragEnter(index, toDo.id)}
            onDragLeave={() => handleDragLeave(toDo.id)}
            className='task-text'
        >
        <MarkComplete item={toDo} index={index} />
        {toDo.complete === false 
            ? <td
                draggable={toDo.complete === false ? 'true' : 'false'} 
                onDragStart={(e) => handleDragStart(e, index)}             
                ><FontAwesomeIcon icon={faGripLines} style={{color: 'gray'}} className='moveTask'/></td>
            : <td></td>
        }
          <td>{toDo.task}</td>
          <td>{toDo.date ? new Date(toDo.date).toLocaleString('en-GB', options) : null}</td>
          <EditTask item={toDo} index={index} />
          <DeleteTask id={toDo.id} />
      </tr>
    )
}

export default TaskTemplate