import React from 'react';
import Navbar from "../shared/header/Navbar";
import Footer from "../shared/footer/Footer";
import {Link} from "react-router-dom";

export default class AccountSignUp extends React.Component {
    render() {
        return (
            <div>
                <Navbar { ...this.props } />
                <div className="bck-gray pt-5">
                    <div className="container">
                        <div className="row flex-md-row account-bids">
                            <div className="col account-navigation">
                                <h2 className="pb-1 mb-4">Account</h2>
                                <p className="pb-4 pb-md-5 mb-4">Create account to start bidding. Get first NFTs assigned to your wallet. </p>
                                <div className="pb-5">
                                    <p className="text-gray-medium mb-0">Already have an account?<br /><Link to="/login" className="hover-effect-1">Log in</Link>.</p>
                                </div>
                                <div className="pb-5">
                                    <p className="text-gray-medium mb-0">Not sure how to obtain ADA?<br /><Link to="#" className="hover-effect-1">Visit Help</Link>.</p>
                                </div>
                            </div>
                            <div className="col col-custom-1 py-5 pl-lg-5 my-lg-5 w-100">
                                <div className="empty-space-60" />
                                <div className="">
                                    <h4 className="big pb-1 mb-4">Create account for Wolfram’s NFT marketplace</h4>
                                    <p className="text-gray-darker mb-5">Create dedicated account to start competing for NFTs. Not sure where to begin? Learn more about obtaining ADA and creating a wallet in our <span className="text-red"> Help section</span>.</p>
                                    <div className="your-bid">
                                        <form>
                                            <div className="form-group pb-3 mb-1">
                                                <label className="field-label">Username</label>
                                                <input type="text" className="gray-light small" placeholder="Enter email" />
                                            </div>
                                            <div className="form-group pb-4 mb-3">
                                                <label className="field-label">Password</label>
                                                <input type="password" className="gray-light small" placeholder="Enter password" />
                                            </div>
                                            <button type="submit" className="btn btn--gradient mr-3">Sign up</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="empty-space-60" />
                            </div>
                        </div>
                    </div>
                    <div className="empty-space-100" />
                </div>
                <Footer />
            </div>
        )
    }
}