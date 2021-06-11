import React from 'react';
import {Link} from "react-router-dom";

export default class Sections extends React.Component {
    
    render() {
        
        const { activeTab } = this.props;
        return (
            <div className="col-12 account-navigation">
                <h2 className="pb-4 pb-md-5 mb-4">NFT FAQs</h2>
                <div className="account-menu">
                    <div className={`account-menu-item ${activeTab === '0' ? 'active' :''}`}>
                        <button type="button" data-tab={'0'} className="remove-style-button mb-3" onClick={(e) => this.props.changeTab(e)}><span className="disable-events">About us</span></button>
                    </div>
                    <div className={`account-menu-item ${activeTab === '1' ? 'active' :''}`}>
                        <button type="button" data-tab={'1'} className="remove-style-button mb-3" onClick={(e) => this.props.changeTab(e)}><span className="disable-events">Technology</span></button>
                    </div>
                    <div className={`account-menu-item ${activeTab === '2' ? 'active' :''}`}>
                        <button type="button" data-tab={'2'} className="remove-style-button mb-3" onClick={(e) => this.props.changeTab(e)}><span className="disable-events">Wallets and ada</span></button>
                    </div>
                    <div className={`account-menu-item ${activeTab === '3' ? 'active' :''}`}>
                        <button type="button" data-tab={'3'} className="remove-style-button mb-3" onClick={(e) => this.props.changeTab(e)}><span className="disable-events">Live stream</span></button>
                    </div>
                    <div className={`account-menu-item ${activeTab === '4' ? 'active' :''}`}>
                        <button type="button" data-tab={'4'} className="remove-style-button mb-3" onClick={(e) => this.props.changeTab(e)}><span className="disable-events">Auction process</span></button>
                    </div>
                    <div className={`account-menu-item ${activeTab === '5' ? 'active' :''}`}>
                        <button type="button" data-tab={'5'} className="remove-style-button mb-3" onClick={(e) => this.props.changeTab(e)}><span className="disable-events">Owning an NFT</span></button>
                    </div>
                </div>
            </div>
        )
    }
}