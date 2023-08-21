import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setState, setToDo, deleteToDo } from '../reducer/toDosReducer';
import { v4 as uuidv4 } from "uuid";
import { firestore } from '../firebaseConfig';
import { collection, arrayUnion, doc, setDoc } from '@firebase/firestore';
import { useAuth } from '../context/AuthContext';

function ModalEdit (props) {

    const [ task, setTask ] = useState('')
    const [ date, setDate ] = useState('')
    const [ completed, setCompleted ] = useState(null)
    const [ toDoId, setTodoId ] = useState(null);
    const [ initToDo, setInitToDo ] = useState({
      id: '',
      index: null,
      task: '',
      date: '',
      complete: '',
    })

    const { currentUser } = useAuth();

    const toDos = useSelector(state => state.toDos.toDos)
    const eventId = useSelector(state => state.toDos.eventID);
    const tasksRef = collection(firestore, 'users')
    const docRef = doc(tasksRef, currentUser.uid)

    const dispatch = useDispatch();

    useEffect(() => {
      if (props.item) {
        setInitToDo({
          id: props.item.id,
          index: props.index,
          task: props.item.task,
          date: props.item.date ? props.item.date : '',
          complete: props.item.complete ? 'completed' : 'pending',
        })
        // setTask(props.item.task)
        // setTodoId(props.item.id)
        // setCompleted(props.item.completed)
        
        // if (props.item.date){
        //   setDate(props.item.date)
        // }
      } else if (props.view === 'calendar') {
        const index = toDos.findIndex(toDo => toDo.id === eventId)
        const item = toDos.find((toDo) => toDo.id === eventId)
        if (item){
          setInitToDo({
            id: item.id,
            index: index,
            task: item.task,
            date: item.date ? item.date : '',
            complete: item.complete ? 'completed' : 'pending',
          })
        }

      }
    }, [props])

    const handleSubmit = async (event) => {

        event.preventDefault();

        let id;

        initToDo.id ? id = initToDo.id : id = uuidv4();

        let newDate = ''
        // date ? newDate = new Date(date).toISOString() : newDate = ''
        initToDo.date ? newDate = initToDo.date : newDate = ''

        const toDo = {
            id: id,
            task: initToDo.task,
            complete: initToDo.complete === 'completed' ? true : false,
            date: newDate,
        }

        if (initToDo.id) {
          console.log(initToDo.id, initToDo.complete)
          // if (initToDo.complete === 'pending') {
            const newArray = [...toDos]
            newArray.splice(initToDo.index, 1, toDo)
            console.log(newArray)
            dispatch(setState(newArray));
            setDoc(docRef, {toDos: newArray})
          // } else {
          //     dispatch(deleteToDo(initToDo.id))
          //     dispatch(setToDo(toDo))
          // } 
        } else {
          setDoc(docRef, {toDos: arrayUnion(toDo)}, {merge: true})
          dispatch(setToDo(toDo))
          setTask('')
          setDate('')
        }
        
        props.onHide();
        
    }

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.item ? "Edit To Do" : "Add New"}
        </Modal.Title>
      </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group className="mb-3" controlId="editToDo">
              <Form.Control
                required
                type="text"
                autoFocus
                onChange={e => setInitToDo({...initToDo, task: e.target.value})}
                value={initToDo.task}
                className='input password'
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editToDo">
              <Form.Control
                required
                type="datetime-local"
                onChange={e =>  setInitToDo({...initToDo, date:e.target.value})}
                value={initToDo.date}
                className='input password'
              />
            </Form.Group>
            {props.view && props.view === 'calendar' && (
              <Form.Group className="mb-3" controlId="editToDo">
                <div className='d-flex justify-content-around'>
                  <Form.Check
                    type="radio"
                    label="Completed"
                    name="status"
                    value='completed'
                    checked={initToDo.complete === 'completed'}
                    onChange={e => setInitToDo({ ...initToDo, complete: e.target.value })}
                  />
                  <Form.Check
                    type="radio"
                    label="Pending"
                    name="status"
                    value='pending'
                    checked={initToDo.complete === 'pending'}
                    onChange={e => setInitToDo({ ...initToDo, complete: e.target.value })}
                  />
                </div>
              </Form.Group>
            )}
          </Form>      
        </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="outline-danger">Cancel</Button>
        <Button className='btn-save' onClick={(e) => handleSubmit(e)}>
           Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEdit