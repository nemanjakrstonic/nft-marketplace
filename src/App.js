import { Router, Switch, Route } from 'react-router-dom';
import history from './settings/history';
import React, { useState, useEffect } from "react";
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
import FaqContainer from "./containers/FaqContainer";
import AccountWithdrawADAContainer from "./containers/account/AccountWithdrawADAContainer";

import { UserContext } from './authentication/context/UserContext';
import { checkUser } from './authentication/service/magic';
import PrivateRoute from './authentication/service/PrivateRoute';

const App = () => {
    const [user, setUser] = useState({ isLoggedIn: null, email: '' });
    const value = { user, setUser };
    
    // const [loading, setLoading] = useState();
    
    useEffect(() => {
        const validateUser = async () => {
            // setLoading(true);
            try {
                await checkUser(setUser);
                console.log('app.js', user);
                // setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        validateUser().then();
    },[user, user.isLoggedIn]);
    if (user.isLoggedIn === null) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <h1>Loading....</h1>
            </div>
        );
    }
    return (
        <UserContext.Provider value={value}>
            <div className="App">
                <Router history={history}>
                    {/*{user.isLoggedIn && <Redirect to={{ pathname: '/' }} />}*/}
                    <ScrollToTop />
                    <Switch>
                        {/*<Route path="/" render={({ match }) => <LandingPageContainer match={match} />}/>*/}
                        {/*<Route path="/home" render={({ match }) => <LandingPageContainer match={match} />}/>*/}
                        {/*<Route path="/home/test" render={({ match }) => <AccountBidsContainer match={match} />}/>*/}
                        <Route path="/" exact component={LandingPageContainer}/>
                        <Route path="/partner/:partnerId" exact component={PartnerProfileContainer}/>
                        {/*<Route path="/category" exact component={CategoryContainer}/>*/}
                        <Route path="/category/:page?" exact component={CategoryContainer}/>
                        <PrivateRoute path="/nft/:artefactId" exact component={SingleItemContainer}/>
                        <PrivateRoute path="/account/bids" exact component={AccountBidsContainer}/>
                        <PrivateRoute path="/account/balance" exact component={AccountBalanceContainer} />
                        <PrivateRoute path="/account/my-nfts/:page?" exact component={AccountMyNFTsContainer}/>
                        <PrivateRoute path="/account/withdraw" exact component={AccountWithdrawADAContainer}/>
                        <Route path="/login" exact component={AccountLoginContainer}/>
                        <Route path="/sign-up" exact component={AccountSignUpContainer}/>
                        <Route path="/faq" exact component={FaqContainer}/>
                        <Route path="" component={Error404}/>
                    </Switch>
                </Router>
            </div>
        </UserContext.Provider>
    );
}
export default App;

// class App extends Component {
//
//     constructor() {
//         super();
//         this.state = {
//             loggedInStatus: false
//         }
//     }
//
//     render() {
//
//         return (
//             <div className="App">
//                 <Router history={history}>
//                     <ScrollToTop />
//                     <Switch>
//                         {/*<Route path="/" render={({ match }) => <LandingPageContainer match={match} />}/>*/}
//                         {/*<Route path="/home" render={({ match }) => <LandingPageContainer match={match} />}/>*/}
//                         {/*<Route path="/home/test" render={({ match }) => <AccountBidsContainer match={match} />}/>*/}
//                         <Route path="/" exact component={LandingPageContainer}/>
//                         <Route path="/partner/:partnerId" exact component={PartnerProfileContainer}/>
//                         {/*<Route path="/category" exact component={CategoryContainer}/>*/}
//                         <Route path="/category/:page?" exact component={CategoryContainer}/>
//                         <Route path="/nft/:artefactId" exact component={SingleItemContainer}/>
//                         <PrivateRoute path="/account/bids" exact comp={AccountBidsContainer}/>
//                         <PrivateRoute path="/account/balance" exact comp={AccountBalanceContainer} />
//                         <PrivateRoute path="/account/my-nfts/:page?" exact comp={AccountMyNFTsContainer}/>
//                         <PrivateRoute path="/account/withdraw" exact comp={AccountWithdrawADAContainer}/>
//                         <Route path="/login" exact component={AccountLoginContainer}/>
//                         <Route path="/sign-up" exact component={AccountSignUpContainer}/>
//                         <Route path="/faq" exact component={FaqContainer}/>
//                         <Route path="" component={Error404}/>
//                     </Switch>
//                 </Router>
//             </div>
//         )
//     };
// }
// export default App;