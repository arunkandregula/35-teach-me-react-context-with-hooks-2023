import React, { useReducer } from 'react';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const { Provider, Consumer } = React.createContext();

const UserProvider = (props) => {
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
            type: LOGOUT,
            data: currentUser
        });
    }
    return <Provider value={{
        currentUser,
        onLogin,
        onLogout
    }}>
        {props.children}
    </Provider>;
};

export { UserProvider, Consumer as UserConsumer };
