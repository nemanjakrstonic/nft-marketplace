import React from 'react';
import {Link} from "react-router-dom";

class Brand extends React.Component {
    
    render() {
        return (
            <div className="header-logo">
                <Link to="/">
                    <img src="/img/logo.svg" alt="logo" />
                </Link>
            </div>
        )
    }
}
export default Brand;