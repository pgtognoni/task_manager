import React, { useState } from 'react'
import ModalComplete from './ModalComplete'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

function MarkComplete({item}) {

  const [ modalShow, setModalShow ] = useState(false);
    
  return (
    <td>
      <button onClick={() => setModalShow(true)}>
        <FontAwesomeIcon icon={faCheckCircle} 
        style={item.complete === false ? {color: '#c9c9c9'} : {color: 'green'}}
        />
      </button>
      <ModalComplete show={modalShow} onHide={() => setModalShow(false)} item={item}/>
    </td>
    )
}

export default MarkComplete