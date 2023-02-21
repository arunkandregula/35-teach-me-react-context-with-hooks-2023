import React from 'react';
import { EmailConsumer } from '../context/EmailContext';

const MessageViewer = () => (
    <EmailConsumer>
        {
            ({ currentEmail, onSelectEmail }) => <div className="MesaageViewer">
                <button onClick={() => onSelectEmail(null)}>
                    Back
                </button>
                <h2>
                    {currentEmail.subject}
                </h2>
                <div>
                    {currentEmail.body}
                </div>
            </div>
        }
    </EmailConsumer>
);

export default MessageViewer;
