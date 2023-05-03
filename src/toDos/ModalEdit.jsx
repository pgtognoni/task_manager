import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setState, setToDo, deleteToDo } from '../reducer/toDosReducer';


function ModalEdit (props) {

    const [ task, setTask ] = useState(props.item.task)

    const dispatch = useDispatch();
    const toDos = useSelector(state => state.toDos.toDos)

    const handleSubmit = (event) => {

        event.preventDefault();

        const toDo = {
            id: props.item.id,
            task: task,
            complete: false,
        }

        if (props.item.complete === false) {
  
          const newArray = [...toDos]
          newArray.splice(props.index, 1, toDo)
          dispatch(setState(newArray));
          props.onHide();

        } else {

          dispatch(deleteToDo(props.item.id))
          dispatch(setToDo(toDo))
          props.onHide();

        }
        
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
          Edit To Do
        </Modal.Title>
      </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group className="mb-3" controlId="editToDo">
              <Form.Control
                type="text"
                autoFocus
                onChange={e =>  setTask(e.target.value)}
                value={task}
              />
            </Form.Group>
          </Form>      
        </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cancel</Button>
        <Button variant="primary" onClick={(e) => handleSubmit(e)}>
           Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEdit