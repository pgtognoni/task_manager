import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import ModalEdit from './ModalEdit'

function EditTask({item, index, getTasks}) {

    const [ modalShow, setModalShow ] = useState(false);

    const handleOpenModal = () => {
        setModalShow(true)
    }

    return (
        <td className='text-right'>
            <button onClick={() => handleOpenModal()} >
                <FontAwesomeIcon icon={faPencil} style={{color: '#4e9ed0'}} />
            </button>
            <ModalEdit 
                show={modalShow} 
                onHide={() => setModalShow(false)} 
                item={item}  
                index={index} 
                getTasks={getTasks}
            />
        </td>
    )
}

export default EditTask