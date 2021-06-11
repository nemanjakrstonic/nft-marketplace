import React from 'react';
import {Link} from "react-router-dom";

// Resources
import logo from "../../../assets/img/wolfram-auction-logo-vector.svg";

class Footer extends React.Component {
    
    render() {
        return (
            <div className="footer-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-column flex-md-row">
                            <div className="footer-logo-wrapper mb-4 mb-md-0">
                                <Link to="/">
                                    <img src={logo} className="footer-logo" alt="" />
                                </Link>
                            </div>
                            <div className="footer-links mb-4 mb-md-0">
                                <p className="mb-0"><Link to="#" className="footer-link">Discord</Link></p>
                                <p className="mb-0"><Link to="#" className="footer-link">About Wolfram</Link></p>
                                <p className="mb-0"><Link to="/faq" className="footer-link">Help & FAQ</Link></p>
                            </div>
                            <div className="copyright ml-md-auto">
                                <p>Copyright 2021.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;