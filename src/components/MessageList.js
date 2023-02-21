import React from 'react';
import { EmailConsumer } from '../context/EmailContext';
import { UserConsumer } from '../context/UserContext';

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
const MessageList = () => (
    <UserConsumer>
        {
            ({ currentUser }) =>
                <EmailConsumer>
                    {({ isLoading, emails, onSelectEmail }) => <div className="MessageList">
                        {isLoading ? <div className="loading">isLoading...</div> : (emails.length === 0 ? <div className="no-messages">
                            Your mailbox is empty, {currentUser.firstName}! 🎉
                        </div> : <EmailList emails={emails} onSelectEmail={onSelectEmail} />)}
                    </div>
                    }
                </EmailConsumer>
        }
    </UserConsumer>
);
export default MessageList;
