import React from 'react';
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import { UserConsumer } from '../context/UserContext';
import { EmailProvider } from '../context/EmailContext';

function App() {

  return (
    <UserConsumer>
      {
        ({ currentUser }) => {
          return currentUser != null ? <EmailProvider><MainPage /></EmailProvider> : <LoginPage />
        }
      }
    </UserConsumer>
  );
}

export default App;
