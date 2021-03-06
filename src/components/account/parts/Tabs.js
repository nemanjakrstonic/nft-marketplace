import React from 'react';
import {Link} from "react-router-dom";

export default class Tabs extends React.Component {
    
    render() {
    
        const { activeTab, tabs, types } = this.props;
        
        return (
            <div className="col-12 account-navigation">
                <h2 className="pb-1 mb-4">My NFTs</h2>
                <p className="pb-4 pb-md-5 mb-4">NFTs that you own oryou are bidding on.</p>
                <div className="account-menu">
                    {
                        Object.keys(tabs).map((key) =>
                            <div key={key} className={`account-menu-item ${activeTab === tabs[key].toString() ? 'active' :''}`}>
                                <Link to="#" data-tab={tabs[key]} data-type={types[key]} onClick={(e) => this.props.changeTab(e)}>{tabs[key]}</Link>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}