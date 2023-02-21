import React from 'react';
import Header from './Header';
import MessageList from './MessageList';
import { EmailConsumer } from '../context/EmailContext';
import MessageViewer from './MessageViewer';

const MainPage = () => {
    console.log('Main page');
    return <EmailConsumer>
        {
            ({ currentEmail }) => <main>
                <Header />
                {currentEmail == null ? <MessageList /> : <MessageViewer message={currentEmail} />}
            </main>

        }
    </EmailConsumer>
};

export default MainPage;
