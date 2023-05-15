import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

function SearchTask({ setToDoList }) {

    const toDos = useSelector(state => state.toDos.toDos)

    const handleSearch = (e) => {
        const regex = new RegExp(e.target.value, 'gi')
        const newArr = toDos.filter(item => item.task.match(regex));
        setToDoList(newArr)
    }

  return (
    <div className='add-new search-task d-flex justify-content-between align-items-center mx-auto m-3 py-2 px-4'>
        <label htmlFor="search"><FontAwesomeIcon icon={faSearch} ></FontAwesomeIcon></label>
        <input type="text" id="search" placeholder="Search..." onChange={e => handleSearch(e)}/>
    </div>
  )
}

export default SearchTask