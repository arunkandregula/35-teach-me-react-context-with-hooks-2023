import React, { useEffect, useState } from 'react';
import { fetchEmails } from '../services/api';
const { Provider, Consumer } = React.createContext();

const EmailProvider = (props) => {
    const [emails, setEmails] = useState([]);
    const [currentEmail, setCurrentEmail] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    // fetch all email on componentDidMount
    useEffect(() => {
        setIsLoading(true);
        setError(false);
        fetchEmails().then((emails) => {
            setIsLoading(false);
            setEmails(emails);
        });
    }, []);

    const handleSelectEmail = (selectedEmail) => {
        setCurrentEmail(selectedEmail);
    }

    // expose the global email data + global hehaviour to child components for email consumers.
    return <Provider value={{
        emails,
        currentEmail,
        isLoading,
        error,
        onSelectEmail: handleSelectEmail
    }}>
        {props.children}
    </Provider>;
}

export { EmailProvider, Consumer as EmailConsumer };
