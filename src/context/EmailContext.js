import React, { useEffect, useState, useRef } from 'react';
import { v4 } from 'uuid';
import { fetchEmails, fetchLatestEmails } from '../services/api';
import { enhanceWithNotifier } from './NotificationContext';
let EmailContext = null;
const { Provider, Consumer } = EmailContext = React.createContext();

const EmailProvider = (props) => {
    const [emails, setEmails] = useState([]);
    const [currentEmail, setCurrentEmail] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    let refreshInterval = useRef(null);


    // fetch all email on componentDidMount
    useEffect(() => {
        setIsLoading(true);
        setError(false);
        fetchEmails().then((_emails) => {
            setIsLoading(false);
            setEmails(_emails);
        });
        refreshInterval.current = setInterval(() => {
            console.log('emails:', emails);
            fetchLatestEmails().then((newEmails) => {
                // Problem1
                setEmails(emails => emails.concat(newEmails));
                props.notify({ id: v4(), text: `${newEmails.length} more emails aarrived` });
            });
        }, 3000);

        return () => {
            clearInterval(refreshInterval.current);
        };

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

const EmailProviderThanCanNotify = enhanceWithNotifier(EmailProvider);
export { EmailProviderThanCanNotify as EmailProvider, Consumer as EmailConsumer, EmailContext };
