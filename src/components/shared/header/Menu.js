import React from 'react';
import {NavLink} from "react-router-dom";
// import { disableClick } from "../../helpers/functions";

class Menu extends React.Component {
    
    render() {
        return (
            <ul className="navbar-nav menu-items">
                <li className="nav-item"><NavLink activeClassName="active" to="/" exact={true}>Home</NavLink></li>
                <li className="nav-item"><NavLink activeClassName="active" to="/category">Buy</NavLink></li>
                <li className="nav-item"><NavLink activeClassName="active" to="/faq">Help & FAQs</NavLink></li>
                {/*<li className="nav-item"><NavLink activeClassName="active" to="/#footer" onClick={(event) => disableClick(event)}>About </NavLink></li>*/}
                <li className="nav-item"><NavLink activeClassName="no-active" to="/#about">About </NavLink></li>
            </ul>
        )
    }
}
export default Menu;