import React from 'react';
import {Link} from "react-router-dom";

class ActionBar extends React.Component {
    
    render() {
        
        return (
            <div className="action-bar">
                <div className="header-search mr-3">
                    <form>
                        <div className="input-image">
                            <img src="/img/gray-search.svg" alt="" />
                            <input type="text" className="" placeholder="Search" defaultValue={this.props.searchValueState} />
                        </div>
                    </form>
                </div>
                {/*<Link to="#" className="btn btn--gradient ml-4">Login</Link>*/}
                <Link to="#" className="btn btn--white ml-5">Connect wallet</Link>
            </div>
        )
    }
}
export default ActionBar;