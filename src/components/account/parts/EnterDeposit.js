import React from 'react';
import { Modal } from 'reactstrap';

// Resources
import close from "../../../assets/img/x.svg";
import link from "../../../assets/img/copy.svg";
import linkHover from "../../../assets/img/copy-hover.svg";
import {Link} from "react-router-dom";


export default class EnterDeposit extends React.Component {
    
    closeModal = () => {
        this.props.closeEnterDepositModal();
    };
    
    render() {
        let { modalOpen } = this.props;
        
        return (
            <div>
                <Modal isOpen={modalOpen}>
                    <div className="modal-header pb-5">
                        <h4 className="smaller pt-2 mb-0">Deposit your auction wallet</h4>
                        <button className="modal-close" onClick={this.closeModal}>
                            <img src={close} alt="Close" />
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>To continue bidding, you need to deposit more ADA into your bidding account. <br /><Link to="#" className="hover-effect-1">Help</Link></p>
                        <p className="pt-4 mb-2">To deposit, send ADA to this address. </p>
                        <p className="confirm-address pb-4 mb-2">
                            <span>0xC6b7E71D81CD06FBc8506bC6b7E71D81CD06FBc8506b</span>
                            <div className="change-hover-img btn-copy">
                                <img src={ link } alt="Copy" />
                                <img src={ linkHover } alt="Copy" />
                            </div>
                        </p>
                        <p className="font-size-14 font-weight-medium text-black"><i>*Note: it may take up to 10 minutes for the blockchain to confirm this transfer and credit your bidding account.</i></p>
                    </div>
                    <div className="modal-footer pt-3">
                        <button onClick={this.closeModal} className="remove-style-button"><span className="btn btn--white">Cancel</span></button>
                    </div>
                </Modal>
            </div>
        );
    }
}