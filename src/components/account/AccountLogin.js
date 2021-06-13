import React, {useContext, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { loginUser } from '../../authentication/service/magic';
import Navbar from "../shared/header/Navbar";
import Footer from "../shared/footer/Footer";
import {UserContext} from "../../authentication/context/UserContext";
// import Authenticate from "../../authentication/service/Authtentication";


const AccountLogin = () => {
    
    const { setUser } = useContext(UserContext);
    
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState('');
    const [error, setError] = useState(null);
    const history = useHistory();
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        if (!email) {
            setLoading(false);
            setError('Email is Invalid');
            return;
        }
        try {
            await loginUser(email);
            setLoading(false);
            setUser({ isLoggedIn: null, email: '' });
            history.replace('/');
            // window.location.reload(true)
        } catch (error) {
            setError('Unable to log in');
            console.error(error);
        }
    };
    const handleChange = (event) => {
        setEmail(event.target.value);
    };
    
    return (
        <div>
            <Navbar />
            <div className="login bck-gray py-5">
                <div className="container">
                    <div className="row flex-md-row account-bids">
                        <div className="col-12 bg-white py-md-5 box-shadow-1 border-radius-6">
                            <div className="text-center py-5 mb-5">
                                <h4 className="big pb-4 mb-4">Log in</h4>
                                <p className="text-gray-darker mb-5 max-width-px-500 mx-auto">No password is needed - sign up with you email address, and follow the link you will receive shortly. That’s it, you are authenticated! </p>
                                <div className="py-md-5 mb-md-5">
                                    <form onSubmit={handleSubmit}>
                                        <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center">
                                            <div className="form-group mb-0">
                                                <input type="text" className="small" placeholder="Enter email address" value={email} onChange={handleChange} />
                                            </div>
                                            <button type="submit" className="btn btn--gradient ml-sm-3 mt-3 mt-sm-0">
                                                {loading ? 'Loading...' : 'Log in'}
                                            </button>
                                        </div>
                                        <p className="text-danger text-small">{error}</p>
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
export default AccountLogin;