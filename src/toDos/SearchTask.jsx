import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

function SearchTask({ setToDoList }) {

    const toDos = useSelector(state => state.toDos.toDos)

    const handleSearch = (e) => {
        const newArr = toDos.filter(item => item.task.match(e.target.value))
        setToDoList(newArr)
    }

  return (
    <div>
        <label htmlFor="search"><FontAwesomeIcon icon={faSearch} ></FontAwesomeIcon></label>
        <input type="text" id="search" placeholder="Search..." onChange={e => handleSearch(e)}/>
    </div>
  )
}

export default SearchTask