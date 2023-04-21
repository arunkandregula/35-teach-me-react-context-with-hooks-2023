import { v4 } from 'uuid';

export const FAKE_USER = {
    firstName: 'Arun',
    lastName: 'Kandregula',
    username: 'arun',
    avatar:
        'https://www.gravatar.com/avatar/572515c68e11c51e5dac3001c1134ca9'
};

export const FAKE_EMAILS = [
    {
        id: 0,
        subject: 'Hey Dave',
        body: 'Yo, just wanted to say hey.'
    },
    {
        id: 1,
        subject: 'React is great',
        body: 'I thought I should let you know.'
    },
    {
        id: 2,
        subject: 'REQUEST FOR ASSISTANCE',
        body:
            'If you send me your bank account number I will reward you with $10 million whole US dollars.'
    }
];

// Generate a preview
FAKE_EMAILS.forEach(
    email => (email.preview = email.body.substr(0, 46))
);

export const login = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === FAKE_USER.username && password === 'secret') {
                resolve(FAKE_USER);
            } else {
                reject({ message: 'Invalid username or password' });
            }
        }, 300);
    });
}

export const fetchEmails = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(FAKE_EMAILS);
        }, 300);
    });
}

export const fetchLatestEmails = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(FAKE_EMAILS.map((eachEmail) => {
                return {
                    ...eachEmail,
                    id: v4(),
                };
            }).slice(0, Math.round(Math.random() * FAKE_EMAILS.length)));
        }, 1000);
    });
}
