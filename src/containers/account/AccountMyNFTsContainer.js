import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {

} from '../../actions';
import AccountMyNFTs from "../../components/account/AccountMyNFTs";

class AccountMyNFTsContainer extends React.Component {
    render() {
        return (
            <AccountMyNFTs {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(AccountMyNFTsContainer);