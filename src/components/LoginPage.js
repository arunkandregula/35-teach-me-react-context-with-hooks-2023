import React, { useState } from 'react';
import * as api from '../services/api';
const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        api.login(username, password).then((currentUser) => {
            onLogin(currentUser);
        }).catch(error => alert(error.message));

    };
    return <div className="LoginPage">
        <form type="submit" onSubmit={handleSubmit}>
            <section>
                <div>Username</div>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </section>
            <section>
                <div>Password</div>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </section>
            <div><button>Sign In</button></div>
        </form>
    </div>;
};
export default LoginPage
