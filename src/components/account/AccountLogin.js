import React from 'react';
import Navbar from "../shared/header/Navbar";
import Footer from "../shared/footer/Footer";
import {Link} from "react-router-dom";
import { fakeAuth } from '../helpers/FakeAuth'



export default class AccountLogin extends React.Component {
    
    login = () => {
        // localStorage.setItem('loggedin', 'true');
        fakeAuth.authenticate(() => {
            // console.log('logged');
        })
        this.forceUpdate();
        this.props.history.push('/account/my-nfts');
        // console.log('11');
        // return <Redirect to="/account/my-nfts" />
    }
    
    render() {
        return (
            <div>
                <Navbar { ...this.props } />
                <div className="login bck-gray py-5">
                    <div className="container">
                        <div className="row flex-md-row account-bids">
                            <div className="col-12 bg-white py-md-5 box-shadow-1 border-radius-6">
                                <div className="text-center py-5 mb-5">
                                    <h4 className="big pb-4 mb-4">Log in</h4>
                                    <p className="text-gray-darker mb-5 max-width-px-500 mx-auto">No password is needed - sign up with you email address, and follow the link you will receive shortly. That’s it, you are authenticated! </p>
                                    <div className="py-md-5 mb-md-5">
                                        <form>
                                            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center">
                                                <div className="form-group mb-0">
                                                    <input type="text" className="small" placeholder="Enter email address" />
                                                </div>
                                                <button type="button" className="btn btn--gradient ml-sm-3 mt-3 mt-sm-0" onClick={this.login}>Log in</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="empty-space-60" />
                </div>
                <Footer />
            </div>
        )
    }
}