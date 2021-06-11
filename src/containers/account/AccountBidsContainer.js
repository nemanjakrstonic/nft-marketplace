import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {

} from '../../actions';
import AccountBids from "../../components/account/AccountBids";

class AccountBidsContainer extends React.Component {
    render() {
        return (
            <AccountBids {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(AccountBidsContainer);