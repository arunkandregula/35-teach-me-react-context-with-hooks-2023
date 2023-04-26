import React, { useState, useContext } from 'react';

// Mistake1: Dont use React.useContext(). Call React.createContext().
let NotificationContext = null;
const { Provider, Consumer } = NotificationContext = React.createContext();

const NotificationProvider = (props) => {
    const [messages, setMessages] = useState([]);
    const notify = (msg) => {
        // Mistake4. First signature setMessages(newState) doesnt work.
        // stale closure issue.
        // Learning. Only 2nd signature setMessages(prevState => newState) ONLY work.
        setMessages(messages => messages.concat(msg));
    }
    const handleClose = (messageID) => {
        const index = messages.findIndex(eachMsg => eachMsg.id === messageID);
        setMessages([
            ...messages.slice(0, index),
            ...messages.slice(index + 1),
        ]);
    }
    return <Provider value={{
        notify
    }}>
        {/* Mistake3: Forgot to add props.children */}
        {props.children}
        <ul className="notification-wrapper">
            {
                messages.map(eachMessage => <li key={eachMessage.id} className="notification">
                    {eachMessage.text}
                    <button className="notification-close" onClick={handleClose.bind(null, eachMessage.id)}>x</button>
                </li>)
            }
        </ul>
    </Provider>;
}

// Define a HOC
// Mistake2: Tried directly returning an element than returning a function.
export const enhanceWithNotifier = (InputComponent) => (props) => {
    const { notify } = useContext(NotificationContext);
    return <InputComponent {...props} notify={notify} />;
}


export { NotificationProvider, Consumer as NotificationConsumer, NotificationContext };
