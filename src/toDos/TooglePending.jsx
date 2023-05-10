import React from 'react'

function TooglePending({ setShowPending, showPending }) {

    const handleToogle = () => {
        setShowPending(!showPending)
    }

  return (
    // <div className='d-flex align-items-center toogle-task'>
    <thead>
      <tr>
        <th colSpan={3}>Show: </th>
        <th colSpan={2}>
          <label htmlFor='pending' className='mx-1' >Pending</label>
          <input type="radio" name="option" value="true" checked={showPending === true} onChange={handleToogle} />
        </th>
        <th colSpan={2}>
          <label htmlFor='completed' className='mx-1'>Completed</label>
          <input type="radio" name="option" value="false" checked={showPending === false} onChange={handleToogle} />
        </th>
      </tr>
    </thead>
    // </div>
  )
}

export default TooglePending