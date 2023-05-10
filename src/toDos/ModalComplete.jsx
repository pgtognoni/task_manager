import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react'
import { useDispatch } from 'react-redux'
import { setToDo, deleteToDo } from '../reducer/toDosReducer'


function ModalComplete(props) {

    const dispatch = useDispatch()

    const handleClose = (e, item) => {
        props.onHide();
        e.preventDefault()

        let newItem;
        
        item.complete === false 
          ? newItem = {...item, complete: true} 
          : newItem = {...item, complete: false}

        dispatch(deleteToDo(item.id))
        dispatch(setToDo(newItem))
    };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.item.complete === false 
            ? 'Mark as completed?'
            : 'Still pending?'
          }
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="outline-danger">No</Button>
        <Button variant="success" onClick={(e) => handleClose(e, props.item)}>
           Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComplete