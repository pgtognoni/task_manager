import React, { useState } from 'react'
import ModalComplete from './ModalComplete'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

function MarkComplete({item, index }) {

  const [ modalShow, setModalShow ] = useState(false);
    
  return (
    <td colSpan={2}>
      <button onClick={() => setModalShow(true)} className='complete-btn text-white'>
        <FontAwesomeIcon icon={faCheckCircle} 
        style={item.complete === false ? {color: '#c9c9c9'} : {color: 'green'}}
        className={'mx-2'}
        />
        {index +1}
      </button>
      <ModalComplete show={modalShow} onHide={() => setModalShow(false)} item={item}/>
    </td>
    )
}

export default MarkComplete