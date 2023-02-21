import React from 'react';
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import { UserConsumer } from '../context/UserContext';

function App() {
  return (
    <UserConsumer>
      {
        ({ currentUser }) => {
          return currentUser != null ? <MainPage /> : <LoginPage />
        }
      }
    </UserConsumer>
  );
}

export default App;
