import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteToDo } from '../reducer/toDosReducer'
import { firestore } from '../firebaseConfig';
import { collection,  doc, setDoc } from '@firebase/firestore';
import { useAuth } from '../context/AuthContext';

function ModalDelete (props) {

    const dispatch = useDispatch()
    const { currentUser } = useAuth();

    const toDos = useSelector(state => state.toDos.toDos)
    const tasksRef = collection(firestore, 'users')
    const docRef = doc(tasksRef, currentUser.uid)

    const handleDelete = async (id, item) => {
        dispatch(deleteToDo(id))
        const newArray = toDos.filter(toDo => toDo.id !== item.id)
        setDoc(docRef, {toDos: newArray})
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
        <Button className='btn-save' onClick={(e) => handleDelete(props.id, props.item)}>
           Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDelete