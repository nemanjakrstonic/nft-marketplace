import React from 'react';
import {Link} from "react-router-dom";

class Footer extends React.Component {
    
    render() {
        return (
            <div className="footer-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <Link to="/">
                                <img src="/img/logo.svg" className="footer-logo" alt="" />
                            </Link>
                            <p className="copyright">Copyright 2021.</p>
                        </div>
                        <div className="col-md-3">
                            <h6 className="pb-1 mb-3">Community</h6>
                            <p className="mb-0"><Link to="#" className="footer-link">Discord</Link></p>
                            <p className="mb-0"><Link to="#" className="footer-link">Blog</Link></p>
                            <p className="mb-0"><Link to="#" className="footer-link">Help</Link></p>
                            <p className="mb-0"><Link to="#" className="footer-link">Social</Link></p>
                        </div>
                        <div className="col-md-3">
                            <h6 className="pb-1 mb-3">Partners</h6>
                            <p className="mb-0"><Link to="#" className="footer-link">Submit a partner profile</Link></p>
                        </div>
                        <div className="col-md-3">
                            <h6 className="pb-1 mb-3">Legal</h6>
                            <p className="mb-0"><Link to="#" className="footer-link">Community guidelines</Link></p>
                            <p className="mb-0"><Link to="#" className="footer-link">Terms of use</Link></p>
                            <p className="mb-0"><Link to="#" className="footer-link">Privacy policy</Link></p>
                            <p className="mb-0"><Link to="#" className="footer-link">Report content</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;