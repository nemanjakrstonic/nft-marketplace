import React from 'react';
import Brand from './Brand'
import Menu from "./Menu";
import ActionBar from "./ActionBar";




class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.toggleClass = this.toggleClass.bind(this);
        this.state = {
            active: false,
        };
    }
    
    toggleClass() {
        this.setState({
            active : !this.state.active,
        });
    };
    
    render() {
        return (
            <div className="navbar-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <Brand />
                                <button className="navbar-toggler ml-auto" type="button" onClick={this.toggleClass}>
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className={"collapse navbar-collapse " + (this.state.active ? 'show': null)} id="navbarSupportedContent">
                                    <Menu />
                                    <ActionBar { ...this.props } />
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Navbar;