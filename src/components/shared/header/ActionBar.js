import React from 'react';
import {Link, NavLink} from "react-router-dom";

// import { isLoggedIn } from '../../helpers/IsLoggedin'
import { fakeAuth } from '../../helpers/FakeAuth';

// // Resources
// import logout from "../../../assets/img/logout.svg";
// import logoutHover from "../../../assets/img/logout-hover.svg";

class ActionBar extends React.Component {

    logout = () => {
        fakeAuth.signout();
        // localStorage.setItem('loggedin', 'false');
        this.props.history.push('/');
    }
    
    render() {
        // const loggedIn = isLoggedIn();
        const loggedIn = fakeAuth.isAuthenticated;
        return (
                loggedIn ?
                    <div className="action-bar">
                        <ul className="navbar-nav menu-items">
                            <li className="nav-item"><NavLink activeClassName="active" to="/account/my-nfts">My NFTs</NavLink></li>
                            <li className="nav-item"><NavLink activeClassName="active" to="/account/bids">Account</NavLink></li>
                        </ul>
                        <Link to="/account/balance" className="btn btn--gradient mt-4 mt-lg-0 ml-lg-4">Deposit</Link>
                        <button onClick={this.logout} className="remove-style-button"><span className="btn btn--white ml-0 ml-lg-3 mt-3 mt-lg-0">Log out</span></button>
                    </div>
                :
                    <div className="action-bar">
                        <Link to="/login" className="btn btn--gradient mt-4 mt-lg-0 ml-lg-4">Sign up</Link>
                        <Link to="/login" className="btn btn--white ml-lg-3 mt-3 mt-lg-0">Log in</Link>
                    </div>
        )
    }
}
export default ActionBar;