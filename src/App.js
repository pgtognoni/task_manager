import React, { useEffect, useState } from 'react';
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
import UserLogged from './pages/UserLogged';
import { useAuth } from './context/AuthContext';

function App() {
  
  const { currentUser } = useAuth();
  
  return (
    <div className="App">
      <NavbarCollapse />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/register' element={<Register />} />
        {currentUser && <Route path='/taskmanager' element={<TaskManager />} />}
        <Route path='/userLogged' element={<UserLogged />} />
        
        <Route path="*" element={<h1>Not Found...</h1>} />
      </Routes>
    </div>
  );
}

export default App;
