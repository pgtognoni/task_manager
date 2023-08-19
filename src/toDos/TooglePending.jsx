import React from 'react'

function TooglePending({ setShowPending, showPending }) {

    const handleToogle = () => {
        setShowPending(!showPending)
    }

  return (
    <thead className='toogle-task'>
      <tr className='text-white'>
        <th colSpan={4}>
          <label htmlFor='pending' className='mx-1 text-danger' >Pending</label>
          <input type="radio" name="option" value="true" checked={showPending === true} onChange={handleToogle} />
        </th>
        <th colSpan={3}>
          <label htmlFor='completed' className='mx-1 text-green'>Completed</label>
          <input type="radio" name="option" value="false" checked={showPending === false} onChange={handleToogle} />
        </th>
      </tr>
    </thead>
  )
}

export default TooglePending