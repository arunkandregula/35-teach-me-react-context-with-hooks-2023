import React, { useContext } from 'react';
import { EmailContext } from '../context/EmailContext';

const MessageViewer = () => {
    const { currentEmail, onSelectEmail } = useContext(EmailContext);
    return <div className="MesaageViewer">
        <button onClick={() => onSelectEmail(null)}>
            Back
        </button>
        <h2>
            {currentEmail.subject}
        </h2>
        <div>
            {currentEmail.body}
        </div>
    </div>;
};

export default MessageViewer;
