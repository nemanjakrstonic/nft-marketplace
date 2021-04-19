import React from 'react';
import {Link} from "react-router-dom";

class Menu extends React.Component {
    
    render() {
        return (
            <ul className="menu-items">
                <li><Link to="#">Discover</Link></li>
                <li><Link to="#">How it works</Link></li>
            </ul>
        )
    }
}
export default Menu;