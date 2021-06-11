import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from './settings/history';
import React, { Component } from "react";
import LandingPageContainer from "./containers/LandingPageContainer";
import ScrollToTop from "./components/helpers/ScrollToTop";
import Error404 from "./components/Error404";
import PartnerProfileContainer from "./containers/PartnerProfileContainer";
import CategoryContainer from "./containers/CategoryContainer";
import SingleItemContainer from "./containers/SingleItemContainer";
import AccountBidsContainer from "./containers/account/AccountBidsContainer";
import AccountBalanceContainer from "./containers/account/AccountBalanceContainer";
import AccountMyNFTsContainer from "./containers/account/AccountMyNFTsContainer";
import AccountLoginContainer from "./containers/account/AccountLoginContainer";
import AccountSignUpContainer from "./containers/account/AccountSignUpContainer";

import { isLoggedIn } from './components/helpers/IsLoggedin'
import { fakeAuth } from './components/helpers/FakeAuth'
import AccountWithdrawADAContainer from "./containers/account/AccountWithdrawADAContainer";
import FaqContainer from "./containers/FaqContainer";

// const PrivateRoute = ({
//       component: Component,
//       ...rest
//   }) => (
//     <Route
//         {...rest}
//         render={props =>
//             fakeAuth.isAuthenticated === 'true' ? (
//                 <Component {...props} />
//             ) : (
//                 <Redirect to="/login" />
//             )
//         }
//     />
// );
const PrivateRoute = ({
        comp: Component, // use comp prop
        ...rest
    }) => (
    <Route
        {...rest}
        render={props =>
            fakeAuth.isAuthenticated === true ? (
                <Component {...props} />
            ) : (
                <Redirect to="/login" />
            )
        }
    />
);
// checkLoginStatus() {
//     const tokenString = localStorage.getItem('loggedin');
//     console.log('1'+tokenString);
//     return tokenString === 'true';
// }
// componentDidMount() {
//     this.setState({
//         loggedInStatus: this.checkLoginStatus()
//     })
// }


class App extends Component {
    
    componentDidMount() {
        if (isLoggedIn()) {
            // console.log('11111111a', fakeAuth.isAuthenticated);
            // fakeAuth.authenticate();
        }
    }
    
    constructor() {
        super();
        this.state = {
            loggedInStatus: false
        }
    }
    // checkLoginStatus() {
    //     const tokenString = localStorage.getItem('loggedin');
    //     console.log('1'+tokenString);
    //     return tokenString === 'true';
    // }
    // componentDidMount() {
    //     this.setState({
    //         loggedInStatus: this.checkLoginStatus()
    //     })
    // }
    
    render() {
        
        return (
            <div className="App">
                <Router history={history}>
                    <ScrollToTop />
                    <Switch>
                        {/*<Route path="/" render={({ match }) => <LandingPageContainer match={match} />}/>*/}
                        {/*<Route path="/home" render={({ match }) => <LandingPageContainer match={match} />}/>*/}
                        {/*<Route path="/home/test" render={({ match }) => <AccountBidsContainer match={match} />}/>*/}
                        <Route path="/" exact component={LandingPageContainer}/>
                        <Route path="/partner/:partnerId" exact component={PartnerProfileContainer}/>
                        {/*<Route path="/category" exact component={CategoryContainer}/>*/}
                        <Route path="/category/:page?" exact component={CategoryContainer}/>
                        <Route path="/nft/:artefactId" exact component={SingleItemContainer}/>
                        <PrivateRoute path="/account/bids" exact comp={AccountBidsContainer}/>
                        <PrivateRoute path="/account/balance" exact comp={AccountBalanceContainer} />
                        <PrivateRoute path="/account/my-nfts/:page?" exact comp={AccountMyNFTsContainer}/>
                        <PrivateRoute path="/account/withdraw" exact comp={AccountWithdrawADAContainer}/>
                        <Route path="/login" exact component={AccountLoginContainer}/>
                        <Route path="/sign-up" exact component={AccountSignUpContainer}/>
                        <Route path="/faq" exact component={FaqContainer}/>
                        <Route path="" component={Error404}/>
                    </Switch>
                </Router>
            </div>
        )
    };
}
export default App;