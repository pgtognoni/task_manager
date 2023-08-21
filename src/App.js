import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import TaskManager from './pages/TaskManager';
import NavbarCollapse from './generalComponents/NavbarCollapse';
import HomePage from './pages/HomePage';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import { useAuth } from './context/AuthContext';
import Calendar from './generalComponents/Calendar/Calendar';
import Spinner from 'react-bootstrap/Spinner';

function SpinnerComponent() {
  return (
    <div className="spinner-container">
      <Spinner className='spinner-loading' animation="border" role="status" variant='warning'>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

function App() {
  
  const { currentUser } = useAuth();
  
  return (
    <div className="App">
      <NavbarCollapse />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/register' element={<Register />} />
        {currentUser && 
        <>
          <Route path='/taskmanager' element={<TaskManager />} />
          <Route path='/calendar' element={<Calendar />} />
        </>
        }
        
        <Route path="*" element={<SpinnerComponent />} />
      </Routes>
    </div>
  );
}

export default App;
