import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskManager from './toDos/TaskManager';
import { useSelector, useDispatch } from 'react-redux';
import { setState } from './reducer/toDosReducer';
import React, { useEffect } from 'react';

function App() {
  
  const toDos = useSelector(state => state.toDos)
  const dispatch = useDispatch()

  useEffect(() => {

    const list = JSON.parse(window.localStorage.getItem('toDos'))

    if (list.toDos && list.toDos.length > 0) {
      dispatch(setState(list.toDos))
    }
    
  }, [])

  useEffect(() => {
    const list = JSON.stringify(toDos)
    window.localStorage.setItem('toDos', list)
  }, [toDos])

  return (
    <div className="App">
      <TaskManager />
    </div>
  );
}

export default App;
