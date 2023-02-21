import React, { useEffect, useReducer, useRef } from 'react';
import { UserConsumer } from '../context/UserContext';

const SHOW_MENU = 'SHOW_MENU';
const HIDE_MENU = 'HIDE_MENU';
const UserMenu = ({ currentUser, onLogout }) => {
    const avatarRef = useRef();
    const [isMenuVisible, dispatchIsMenuVisible] = useReducer((prevState, action) => {
        debugger;
        switch (action.type) {
            case SHOW_MENU: return true;
            case HIDE_MENU: return false;
            default:
                break;
        }
        return prevState;
    }, false);
    const handleMenuClick = () => {
        dispatchIsMenuVisible({
            type: SHOW_MENU,
        });
    }
    const handleClick = (e) => {
        if (e.target !== avatarRef.current) {
            dispatchIsMenuVisible({
                type: HIDE_MENU,
            });
        }
    }
    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, []);
    return <UserConsumer>
        {
            ({ currentUser, onLogout }) =>
                <div className="UserMenu" >
                    <img
                        className="UserAvatar"
                        src={currentUser.avatar}
                        onClick={handleMenuClick}
                        ref={avatarRef}
                    />
                    {isMenuVisible && <ul>
                        <li onClick={onLogout}>Logout</li>
                    </ul>}
                </div>
        }
    </UserConsumer>;
}
export default UserMenu;
