import React, { useState } from 'react'

function TooglePending({ setShowPending, showPending }) {

  const [ pending, setPending ] = useState(true);
  const [ completed, setCompleted ] = useState(false);

    const handleToogle = () => {
        setShowPending(!showPending)
        setPending(!pending)
        setCompleted(!completed);
    }

  return (
    <thead className='toogle-task'>
      <tr className='text-white'>
        <th colSpan={7}>
          <div className='d-flex justify-content-around'>
            <button onClick={handleToogle} className={`${pending ? 'active text-danger' : 'text-gray'}`}>Pending</button>
            <button onClick={handleToogle} className={`${completed ? 'active text-green' : 'text-gray'}`}>Completed</button>
          </div>
        </th>
      </tr>
    </thead>
  )
}

export default TooglePending