import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import ModalDelete from './ModalDelete'

function DeleteTask({ id, item }) {

    const [ modalShow, setModalShow ] = useState(false);

    return (
        <div>
            <button onClick={() => setModalShow(true)}><FontAwesomeIcon icon={faTrash} style={{color: 'red'}}/></button>
            <ModalDelete show={modalShow} onHide={() => setModalShow(false)} id={id} item={item} />
        </div>
    )
}

export default DeleteTask