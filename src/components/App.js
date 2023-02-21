import React, { useReducer } from 'react';
import MainPage from './MainPage';
import LoginPage from './LoginPage';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

function App() {
  const [currentUser, dispatchCurrentUser] = useReducer((prevState, action) => {
    console.log('Reducer: prevState:', prevState, ' , action:', action);
    switch (action.type) {
      case LOGIN: return action.data;
      case LOGOUT: return null;
      default:
        break;
    }
    return prevState;
  }, null);
  const onLogin = (currentUser) => {
    dispatchCurrentUser({
      type: LOGIN,
      data: currentUser
    });
  }
  const onLogout = () => {
    dispatchCurrentUser({
      type: LOGIN,
      data: currentUser
    });
  }
  console.log('currentUser:', currentUser);
  return (
    currentUser != null ?
      <MainPage currentUser={currentUser} onLogout={onLogout} /> :
      <LoginPage onLogin={onLogin} />
  );
}

export default App;
