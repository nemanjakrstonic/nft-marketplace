import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    setSearchValueState
} from '../actions';
import Category from "../components/category/Category";

class CategoryContainer extends React.Component {
    render() {
        return (
            <Category {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);