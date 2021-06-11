import React from 'react';
import { Modal } from 'reactstrap';

// Resources
import close from "../../../assets/img/x.svg";


export default class ConfirmBid extends React.Component {
    
    closeModal = () => {
        this.props.closeConfirmBidModal();
    };
    confirmBid = () => {
        this.props.confirmBid();
        this.closeModal();
    };
    
    render() {
        // const { bidAmount, address, image } = this.props;
        const { bidAmount, image } = this.props;
        let { modalOpen } = this.props;
        
        return (
            <div>
                <Modal isOpen={modalOpen}>
                    <div className="modal-header pb-4 mb-2">
                        <h4 className="smaller pt-2 mb-0">Confirm bid</h4>
                        <button className="modal-close" onClick={this.closeModal}>
                            <img src={close} alt="Close" />
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row align-items-center modal-content-1">
                            <div className="col-sm-6">
                                <label className="label-style-1">BID AMOUNT</label>
                                <h6 className="pb-2 mb-4">{ bidAmount } ADA</h6>
                                {/*<label className="label-style-1">TO ADDRESS</label>*/}
                                {/*<h6 className="text-ellipsis">{ address }</h6>*/}
                            </div>
                            <div className="col-sm-6 ">
                                <img src={image} className="nft ml-0 ml-sm-auto" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer pt-4 mt-5">
                        <button type="button" onClick={() => this.confirmBid('424324')} className="btn btn--gradient mr-3">Confirm transfer</button>
                        <button onClick={this.closeModal} className="remove-style-button"><span className="btn btn--white">Cancel</span></button>
                    </div>
                </Modal>
            </div>
        );
    }
}