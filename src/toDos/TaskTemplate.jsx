import React, { useState } from 'react'
import DeleteTask from './DeleteTask'
import MarkComplete from './MarkComplete'
import EditTask from './EditTask'
import ModalComplete from './ModalComplete'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLines, faCheckCircle, faBars } from '@fortawesome/free-solid-svg-icons'

function TaskTemplate(props) {

    const { toDo, index, handleDragStart, handleDrop, handleDragOver, handleDragEnter, handleDragLeave } = props;

    const [ modalShow, setModalShow ] = useState(false);

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
            className='task-text text-white'
        >
          <td 
            colSpan={1} 
            draggable={toDo.complete === false ? 'true' : 'false'} 
            onDragStart={(e) => handleDragStart(e, index)}  
            >
              <FontAwesomeIcon icon={faBars} className='moveTask'/>
          </td>
          <td colSpan={3} className='task-text-container'>
            <div className='d-flex align-items-center'>
                <MarkComplete item={toDo} index={index} handleDragStart={handleDragStart} />
                <div className='task-text text-white'>
                    {toDo.task}
                </div>
            </div>
            </td>
          <td colSpan={2} className='task-date text-white'>{toDo.date ? new Date(toDo.date).toLocaleString('en-GB', options) : null}</td>
          <td colSpan={1} >
            <div className='d-flex gap-2'>
                <EditTask item={toDo} index={index} />
                <DeleteTask id={toDo.id} item={toDo} />
            </div>
          </td>
      </tr>
    )
}

export default TaskTemplate