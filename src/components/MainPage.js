import React, { useContext } from 'react';
import Header from './Header';
import MessageList from './MessageList';
import { EmailContext } from '../context/EmailContext';
import MessageViewer from './MessageViewer';

const MainPage = () => {
    const { currentEmail } = useContext(EmailContext);

    return <main>
        <Header />
        {currentEmail == null ? <MessageList /> : <MessageViewer message={currentEmail} />}
    </main>;
}

export default MainPage;
