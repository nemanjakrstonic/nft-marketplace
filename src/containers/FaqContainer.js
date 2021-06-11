import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Faq from "../components/faqs/Faq";
// import {} from '../actions';



class FaqContainer extends React.Component {
    render() {
        return (
            <Faq {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(FaqContainer);