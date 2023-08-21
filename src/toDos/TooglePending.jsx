import React, { useState } from 'react'

function TooglePending({ setShowPending, showPending }) {

  const [ pending, setPending ] = useState(true);
  const [ completed, setCompleted ] = useState(false);

    const handleToogle = (type) => {
      if (type === 'pending') {
        setShowPending(true);
        setPending(true);
        setCompleted(false);
      } else if (type === 'completed') {
        setShowPending(false);
        setPending(false);
        setCompleted(true);
      }
    }

  return (
    <thead className='toogle-task'>
      <tr className='text-white'>
        <th colSpan={7}>
          <div className='d-flex justify-content-around'>
            <button onClick={() => handleToogle('pending')} className={`${pending ? 'active text-danger' : 'text-gray'}`}>Pending</button>
            <button onClick={() => handleToogle('completed')} className={`${completed ? 'active text-green' : 'text-gray'}`}>Completed</button>
          </div>
        </th>
      </tr>
    </thead>
  )
}

export default TooglePending