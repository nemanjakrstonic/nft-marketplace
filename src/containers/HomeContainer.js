import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    setSearchValueState,
} from '../actions';

import Home from "../components/home/Home";

class HomeContainer extends React.Component {
    render() {
        return (
            <Home {...this.props} />
        );
    }
}

const mapStateToProps = ({ home }) => {
    return {
        searchValueState: home.searchValueState,
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            setSearchValueState,
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);