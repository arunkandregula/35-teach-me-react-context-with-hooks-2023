import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { UserProvider } from './context/UserContext';
import { NotificationProvider } from './context/NotificationContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NotificationProvider><UserProvider><App /></UserProvider></NotificationProvider>
  //<UserProvider><App /></UserProvider>
);
