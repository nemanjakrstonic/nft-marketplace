import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {

} from '../../actions';
import AccountLogin from "../../components/account/AccountLogin";

class AccountLoginContainer extends React.Component {
    render() {
        return (
            <AccountLogin {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(AccountLoginContainer);