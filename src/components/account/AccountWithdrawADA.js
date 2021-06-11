import React from 'react';
import Navbar from "../shared/header/Navbar";
import Footer from "../shared/footer/Footer";
import Navigation from "./parts/Navigation";
import {Link} from "react-router-dom";


export default class AccountWithdrawADA extends React.Component {
    constructor() {
        super();
        this.state = {
            withdrawAll: false
        }
    }
    
    select(e) {
        this.setState({
            withdrawAll: e.target.checked
        })
    }
    
    
    render() {
        return (
            <div>
                <Navbar { ...this.props } />
                <div className="bck-gray pt-5">
                    <div className="container">
                        <div className="row flex-md-row account-bids">
                            <Navigation active="withdraw" />
                            <div className="col col-custom-1 py-5 pl-lg-5 my-lg-5 w-100">
                                <div className="empty-space-60" />
                                <div className="">
                                    <h4 className="big pb-1 mb-4">Withdraw ADA</h4>
                                    <p className="text-gray-darker mb-5">If you want to withdraw tokens, first specify the address they should be transferred to and then the amount you wish to withdraw. Should you need any help, please visit <Link to="/faq" className="hover-effect-1">Help & FAQs</Link> page.</p>
                                    <div className="your-bid">
                                        <form>
                                            <div className="form-group pb-3 mb-1">
                                                <label className="field-label px-0">Enter an ADA address</label>
                                                <input type="text" className="white small" placeholder="" />
                                            </div>
                                            <div className="form-group pb-4 mb-3">
                                                <div className="label-inline mb-2">
                                                    <label className="field-label px-0 mb-0">Amount to withdraw</label>
                                                    <label className="label-container ml-auto">
                                                        <input type="checkbox" onChange={(e) => this.select(e)} />
                                                        <span className="checkmark" />
                                                        All
                                                    </label>
                                                </div>
                                                <input type="text" className="white small" placeholder="" disabled={this.state.withdrawAll} />
                                            </div>
                                            <button type="button" className="btn btn--gradient mr-3">Submit</button>
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