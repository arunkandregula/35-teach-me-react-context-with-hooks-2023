export const FAKE_USER = {
    firstName: 'Arun',
    lastName: 'Kandregula',
    username: 'arun',
    avatar:
        'https://www.gravatar.com/avatar/572515c68e11c51e5dac3001c1134ca9'
};

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
