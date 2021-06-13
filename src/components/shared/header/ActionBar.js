// import React, {useContext, useState } from 'react';
import React, {useContext } from 'react';
import {Link, NavLink} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../authentication/context/UserContext';
import { logoutUser } from '../../../authentication/service/magic';


const ActionBar = () => {
    // const { email } = useContext(UserContext);
    const { isLoggedIn } = useContext(UserContext).user;
    const { setUser } = useContext(UserContext);
    // const logout = setUser({ isLoggedIn: null, email: '' });
    
    
    const history = useHistory();
    console.log(isLoggedIn, 'llllllllllllllll');
    
    
    
    const handleLogOut = async () => {
        // UseForceUpdate();
        try {
            await logoutUser();
            setUser({ isLoggedIn: null, email: '' });
            history.replace('/');
            // setUser();
        } catch (error) {
            console.error(error);
        }
    };
    
    return (
        isLoggedIn ?
            <div className="action-bar">
                <ul className="navbar-nav menu-items">
                    <li className="nav-item"><NavLink activeClassName="active" to="/account/my-nfts">My NFTs</NavLink></li>
                    <li className="nav-item"><NavLink activeClassName="active" to="/account/bids">Account</NavLink></li>
                </ul>
                <Link to="/account/balance" className="btn btn--gradient mt-4 mt-lg-0 ml-lg-4">Deposit</Link>
                <button onClick={handleLogOut} className="remove-style-button"><span className="btn btn--white ml-0 ml-lg-3 mt-3 mt-lg-0">Log out</span></button>
            </div>
        :
            <div className="action-bar">
                <Link to="/login" className="btn btn--gradient mt-4 mt-lg-0 ml-lg-4">Sign up</Link>
                <Link to="/login" className="btn btn--white ml-lg-3 mt-3 mt-lg-0">Log in</Link>
            </div>
    )
}
export default ActionBar;