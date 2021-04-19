import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    setSearchValueState
} from '../actions';
import SingleItem from "../components/single-item/SingleItem";

class SingleItemContainer extends React.Component {
    render() {
        return (
            <SingleItem {...this.props} />
        );
    }
}

const mapStateToProps = ({ home }) => {
    return {
        searchValueState: home.searchValueState
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            setSearchValueState
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItemContainer);