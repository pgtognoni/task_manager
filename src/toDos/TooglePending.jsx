import React from 'react'

function TooglePending({ setShowPending, showPending }) {

    const handleToogle = () => {
        setShowPending(!showPending)
    }

  return (
    <div className='d-flex align-items-center'>
        <span className='mx-1'>Show: </span>
        <label htmlFor='pending' className='mx-1'>Pending</label>
        <input type="radio" name="option" value="true" checked={showPending === true} onChange={handleToogle} />
        <label htmlFor='completed' className='mx-1'>Completed</label>
        <input type="radio" name="option" value="false" checked={showPending === false} onChange={handleToogle} />
    </div>
  )
}

export default TooglePending