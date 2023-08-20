import React, { useState } from 'react'
import ModalComplete from './ModalComplete'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle,faGripLines, faBars } from '@fortawesome/free-solid-svg-icons'

function MarkComplete({item, index, handleDragStart }) {

  const [ modalShow, setModalShow ] = useState(false);
    
  return (
    <div>
      <button onClick={() => setModalShow(true)} className='complete-btn text-white'>
          <FontAwesomeIcon icon={faCheckCircle} 
          className={`mx-2 ${item.complete === false ? 'text-gray' : 'text-green'}`}
      />
      </button>
      <ModalComplete show={modalShow} onHide={() => setModalShow(false)} item={item}/>
    </div>
    )
}

export default MarkComplete