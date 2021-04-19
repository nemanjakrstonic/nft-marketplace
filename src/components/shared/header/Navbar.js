import React from 'react';
import Brand from './Brand'
import Menu from "./Menu";
import ActionBar from "./ActionBar";

class Navbar extends React.Component {
    
    render() {
        return (
            <div className="navbar-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="navbar">
                                <Brand />
                                <Menu />
                                <ActionBar { ...this.props } />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Navbar;