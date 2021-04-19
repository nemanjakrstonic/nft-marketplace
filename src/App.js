import { Router, Switch, Route } from 'react-router-dom';
import history from './settings/history';
import React, { Component } from "react";
import HomeContainer from "./containers/HomeContainer";
import PartnerProfileContainer from "./containers/PartnerProfileContainer";
import SingleItemContainer from "./containers/SingleItemContainer";
import ScrollToTop from "./components/helpers/ScrollToTop";
import CategoryContainer from "./containers/CategoryContainer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router history={history}>
                    <ScrollToTop />
                    <Switch>
                        <Route path="/" exact component={HomeContainer}/>
                        <Route path="/home" exact component={HomeContainer}/>
                        <Route path="/partner/:partnerId" exact component={PartnerProfileContainer}/>
                        <Route path="/category/:categoryId" exact component={CategoryContainer}/>
                        <Route path="/artefact/:artefactId" exact component={SingleItemContainer}/>
                    </Switch>
                </Router>
            </div>
        )
    };
}
export default App;