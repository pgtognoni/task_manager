import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/store';
import AuthContext from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Provider store={store}>
          <AuthContext>
            <App />
          </AuthContext>
        </Provider>
      </Router>
  </React.StrictMode>
);
