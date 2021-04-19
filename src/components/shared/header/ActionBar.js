import React from 'react';

class ActionBar extends React.Component {
    
    render() {
        
        return (
            <div className="action-bar">
                <div className="header-search">
                    <form>
                        <div className="input-image">
                            <img src="/img/gray-search.svg" alt="" />
                            <input type="text" className="" placeholder="Search" defaultValue={this.props.searchValueState} />
                        </div>
                    </form>
                </div>
                <button className="btn btn--gradient ml-4">Login</button>
                <button className="btn btn--white ml-3">Connect wallet</button>
            </div>
        )
    }
}
export default ActionBar;