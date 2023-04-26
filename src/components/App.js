import React, { useContext } from 'react';
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import { UserContext } from '../context/UserContext';
import { EmailProvider } from '../context/EmailContext';

function App() {
  const { currentUser } = useContext(UserContext);
  return currentUser != null ? <EmailProvider><MainPage /></EmailProvider> : <LoginPage />;
}

export default App;
