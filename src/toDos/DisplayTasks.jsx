import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux';
import { setState } from '../reducer/toDosReducer';
import TaskTemplate from './TaskTemplate';
import TooglePending from './TooglePending';
import { collection,  doc, setDoc } from '@firebase/firestore';
import { firestore } from '../firebaseConfig';

function DisplayTasks({ pending, completed }) {

  const dispatch = useDispatch();
  const tasksRef = collection(firestore, 'tasksManager')
  const docRef = doc(tasksRef, 'tasks')
  const toDos = useSelector(state => state.toDos.toDos)

  const [ dropIndex, setDropIndex ] = useState(null)
  const [ startIndex, setStartIndex ] = useState(null)
  const [ showPending, setShowPending ] = useState(true)

  const handleDragStart = (e, index) => {
    setStartIndex(index)
  }

  const handleDrop = (id) => {
    let newArray = [...toDos] 
    const item = newArray.splice(startIndex, 1)[0]
    newArray.splice(dropIndex, 0, item)
    dispatch(setState(newArray))
    setDoc(docRef, {toDos: newArray})
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
    <div className='m-3 pt-3 task-manager mx-auto'>
    <Table striped>
      <TooglePending setShowPending={setShowPending} showPending={showPending} />
      <tbody>
      <tr>{showPending 
        ? <><td colSpan={7}><h5 className='text-center'>Pending: <span className='mx-3 text-purple'>{pending.length}</span></h5></td></> 
        : <><td colSpan={7}><h5 className='text-center'>Completed: <span className='mx-3 text-green'>{completed.length}</span></h5></td></>
      }</tr>
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
      </tbody>
    </Table>
    </div>
  )
}

export default DisplayTasks