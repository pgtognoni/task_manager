import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setState, setToDo, deleteToDo } from '../reducer/toDosReducer';
import { v4 as uuidv4 } from "uuid";
import { firestore } from '../firebaseConfig';
import { collection, arrayUnion, doc, setDoc } from '@firebase/firestore';

function ModalEdit (props) {

    const [ task, setTask ] = useState('')
    const [ date, setDate ] = useState('')

    const toDos = useSelector(state => state.toDos.toDos)
    const tasksRef = collection(firestore, 'tasksManager')
    const docRef = doc(tasksRef, 'tasks')

    const dispatch = useDispatch();

    useEffect(() => {
      if (props.item) {
        setTask(props.item.task)

        if (props.item.date){
          // let date = new Date(props.item.date)
          // let offset = date.getTimezoneOffset()
          // let newDate = new Date(date.setMinutes(date.getMinutes() - offset)).toLocaleString()
          // let final = new Date(newDate).toISOString().slice(0, -8);
          setDate(props.item.date)
        }
      }
    }, [props])

    const handleSubmit = async (event) => {

        event.preventDefault();
        let id;
        props.item ? id = props.item.id : id = uuidv4();

        let newDate = ''
        // date ? newDate = new Date(date).toISOString() : newDate = ''
        date ? newDate = date : newDate = ''

        const toDo = {
            id: id,
            task: task,
            complete: false,
            date: newDate
        }

        if (props.item) {
          if (props.item.complete === false) {
            const newArray = [...toDos]
            newArray.splice(props.index, 1, toDo)
            dispatch(setState(newArray));
            setDoc(docRef, {toDos: newArray})
          } else {
              dispatch(deleteToDo(props.item.id))
              dispatch(setToDo(toDo))
          } 
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
                onChange={e =>  setTask(e.target.value)}
                value={task}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editToDo">
              <Form.Control
                type="datetime-local"
                onChange={e =>  setDate(e.target.value)}
                value={date}
              />
            </Form.Group>
          </Form>      
        </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="outline-danger">Cancel</Button>
        <Button variant="success" onClick={(e) => handleSubmit(e)}>
           Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEdit