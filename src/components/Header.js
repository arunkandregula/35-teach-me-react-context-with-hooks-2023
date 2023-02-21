import React from 'react';
import UserMenu from './UserMenu';

const Header = ({ currentUser, onLogout }) => {
    return <div className="Header">
        <h2>My mail</h2>
        <UserMenu currentUser={currentUser} onLogout={onLogout} />
    </div>
}

export default Header;
