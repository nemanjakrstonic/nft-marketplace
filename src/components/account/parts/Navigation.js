import React from 'react';
import {Link} from "react-router-dom";

export default class Navigation extends React.Component {
    
    render() {
        
        const { active } = this.props;
        
        return (
            <div className="col account-navigation">
                <h2 className="pb-1 mb-4">Account</h2>
                <p className="pb-4 pb-md-5 mb-4">Manage your wallet and account settings.</p>
                <div className="account-menu">
                    <div className={ "account-menu-item " + ( active === 'active bids' ? 'active' : '' )}><Link to="/account/bids">Active bids</Link></div>
                    <div className={ "account-menu-item " + ( active === 'balance' ? 'active' : '' )}><Link to="/account/balance">Balance</Link></div>
                    <div className={ "account-menu-item " + ( active === 'withdraw' ? 'active' : '' )}><Link to="/account/withdraw">Withdraw</Link></div>
                </div>
            </div>
        )
    }
}