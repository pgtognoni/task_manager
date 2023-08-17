import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setState } from '../reducer/toDosReducer'
import { collection,  doc, setDoc } from '@firebase/firestore';
import { firestore } from '../firebaseConfig';
import { useAuth } from '../context/AuthContext';

function ModalComplete(props) {

    const dispatch = useDispatch()
    const { currentUser } = useAuth();

    const toDos = useSelector(state => state.toDos.toDos)
    const tasksRef = collection(firestore, 'users')
    const docRef = doc(tasksRef, currentUser.uid)

    const handleClose = async (e, item) => {
        props.onHide();
        e.preventDefault()
        const newArray = toDos.filter(toDo => toDo.id !== item.id)
        let newItem;
        
        item.complete === false 
          ? newItem = {...item, complete: true} 
          : newItem = {...item, complete: false}

        newArray.push(newItem)

        dispatch(setState(newArray))
        setDoc(docRef, {toDos: newArray})
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
        <Button 
          variant="outline-danger"
          onClick={props.onHide}>
          No
        </Button>
        <Button 
          variant="success" 
          onClick={(e) => handleClose(e, props.item)}>
           Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComplete