import React from 'react';
import { Modal } from 'reactstrap';

// Resources
import close from "../../../assets/img/x.svg";
import link from "../../../assets/img/copy.svg";
import linkHover from "../../../assets/img/copy-hover.svg";
import {Link} from "react-router-dom";


export default class NotEnoughADA extends React.Component {
    
    constructor() {
        super();
        this.state = {
            showAddress: false,
        };
    }
    
    closeModal = () => {
        this.props.closeNotEnoughADAModal();
    };
    generateAddress = () => {
        this.setState({
            showAddress: true
        })
    };
    
    render() {
        let { modalOpen } = this.props;
        
        return (
            <div>
                <Modal isOpen={modalOpen}>
                    <div className="modal-header pb-5">
                        <h4 className="smaller pt-2 mb-0">You don’t have enough ADA in your account to place this bid</h4>
                        <button className="modal-close" onClick={this.closeModal}>
                            <img src={close} alt="Close" />
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>To continue bidding, you need to deposit more ADA into your bidding account. </p>
                        <p className="mb-5">If you have troubles depositing, visit <Link to="#" className="hover-effect-1">Help section</Link>.</p>
                        <p className="pt-4 mb-3">To deposit, send ADA to this address. </p>
                        <button type="button" onClick={this.generateAddress} className="btn btn--gradient mr-3 mb-4">Generate address</button>
                        {
                            this.state.showAddress ?
                                <p className="confirm-address pb-4 mb-2">
                                    <span>0xC6b7E71D81CD06FBc8506bC6b7E71D81CD06FBc8506b</span>
                                    <button type="button" className="change-hover-img btn-copy" onClick={() => {navigator.clipboard.writeText('0xC6b7E71D81CD06FBc8506bC6b7E71D81CD06FBc8506b').then()}}>
                                        <img src={ link } alt="Copy" />
                                        <img src={ linkHover } alt="Copy" />
                                    </button>
                                </p>
                                :
                                ''
                        }
                        <p className="font-size-14 font-weight-medium text-black"><i>*Note: it may take up to 10 minutes for the blockchain to confirm this transfer and credit your bidding account.</i></p>
                    </div>
                    <div className="modal-footer pt-4">
                        <button onClick={this.closeModal} className="btn btn--gradient mr-3">Copy address</button>
                        <button onClick={this.closeModal} className="remove-style-button"><span className="btn btn--white">Cancel</span></button>
                    </div>
                </Modal>
            </div>
        );
    }
}