import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import {} from '../actions';

import LandingPage from "../components/landingpage/LandingPage";

class LandingPageContainer extends React.Component {
    render() {
        return (
            <LandingPage {...this.props} />
        );
    }
}

const mapStateToProps = ({ home }) => {
    return {
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPageContainer);