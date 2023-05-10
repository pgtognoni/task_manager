import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteToDo } from '../reducer/toDosReducer'


function ModalDelete (props) {

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteToDo(id))
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
          Delete To Do?
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="outline-danger">No</Button>
        <Button variant="success" onClick={(e) => handleDelete(props.id)}>
           Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDelete