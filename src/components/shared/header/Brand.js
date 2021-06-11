import React from 'react';
import {Link} from "react-router-dom";


// Resources
import logo from "../../../assets/img/wolfram-auction-logo-vector.svg";

class Brand extends React.Component {
    
    render() {
        return (
            <div className="header-logo">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
        )
    }
}
export default Brand;