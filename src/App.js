import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setState } from './reducer/toDosReducer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import TaskManager from './pages/TaskManager';
import NavbarCollapse from './generalComponents/NavbarCollapse';
import HomePage from './pages/HomePage';
import LogIn from './pages/LogIn';
import Register from './pages/Register';

function App() {
  
  const toDos = useSelector(state => state.toDos)
  const dispatch = useDispatch()

  //Get ToDos when page upload from LocalStorage if saved locally

  useEffect(() => {

    const list = JSON.parse(window.localStorage.getItem('toDos'))

    if (list.toDos && list.toDos.length > 0) {
      dispatch(setState(list.toDos))
    }

  }, [])

  //Set ToDos in localStorage every time there are changes in the state

  useEffect(() => {
    const list = JSON.stringify(toDos)
    window.localStorage.setItem('toDos', list)
  }, [toDos])

  return (
    <div className="App">
      <NavbarCollapse />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/taskmanager' element={<TaskManager />} />
      </Routes>
    </div>
  );
}

export default App;
