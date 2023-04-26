import React, { useContext } from 'react';
import { EmailContext } from '../context/EmailContext';
import { UserContext } from '../context/UserContext';

const Email = ({ email, onSelectEmail }) => {
    return <li onClick={onSelectEmail.bind(null, email)}>
        <div>{email.subject}</div>
        <div>{email.preview}</div>
    </li>;
}

const EmailList = ({ emails, onSelectEmail }) => {
    return <ul>
        {emails.map(eachEmail => <Email key={eachEmail.id} email={eachEmail} onSelectEmail={onSelectEmail} />)}
    </ul>;
}
const MessageList = () => {
    const { currentUser } = useContext(UserContext);
    const { emails, isLoading, onSelectEmail } = useContext(EmailContext);
    return <div className="MessageList">
        {isLoading ? <div className="loading">isLoading...</div> : (emails.length === 0 ? <div className="no-messages">
            Your mailbox is empty, {currentUser.firstName}! 🎉
        </div> : <EmailList emails={emails} onSelectEmail={onSelectEmail} />)}
    </div>;
};
export default MessageList;
