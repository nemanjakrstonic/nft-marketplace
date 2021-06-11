import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {

} from '../../actions';
import AccountWithdrawADA from "../../components/account/AccountWithdrawADA";

class AccountWithdrawADAContainer extends React.Component {
    render() {
        return (
            <AccountWithdrawADA {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(AccountWithdrawADAContainer);