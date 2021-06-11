import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {

} from '../../actions';
import AccountSignUp from "../../components/account/AccountSignUp";

class AccountSignUpContainer extends React.Component {
    render() {
        return (
            <AccountSignUp {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(AccountSignUpContainer);