import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    setSearchValueState
} from '../actions';
import PartnerProfile from "../components/partner/PartnerProfile";

class PartnerProfileContainer extends React.Component {
    render() {
        return (
            <PartnerProfile {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(PartnerProfileContainer);