import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isLoggedIn } = useContext(UserContext).user;
    // console.log('PR', isLoggedIn);
    return (
        <Route
            {...rest}
            render={(props) =>
                isLoggedIn !== null ?
                    isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
                    :
                    null
            }
        />
    );
};
export default PrivateRoute;