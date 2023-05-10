import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import ModalEdit from './ModalEdit';



function AddNew() {

    const [ modalShow, setModalShow ] = useState(false);

    const handleOpenModal = () => {
        setModalShow(true)
    }

  return (
    <div className='add-new d-flex justify-content-center mx-auto m-3 py-2 px-4'>
        <button onClick={() => handleOpenModal()} className='d-flex gap-2 p-2 align-items-center'>
            <FontAwesomeIcon icon={faAdd} style={{color: 'green'}} className=''/>
            <span>Add New</span>
        </button>
        <ModalEdit                 
            show={modalShow} 
            onHide={() => setModalShow(false)} 
        />
    </div>
  )
}

export default AddNew