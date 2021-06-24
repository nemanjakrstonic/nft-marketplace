import React from 'react';
import Navbar from "../shared/header/Navbar";
import Footer from "../shared/footer/Footer";
import Navigation from "./parts/Navigation";
import EnterDeposit from "./parts/EnterDeposit";

export default class AccountBalance extends React.Component {
    constructor() {
        super();
        this.openEnterDepositModal = this.openEnterDepositModal.bind(this);
        this.closeEnterDepositModal = this.closeEnterDepositModal.bind(this);
        this.state = {
            enterDepositModalState: false,
            availableADA: 500,
            spentADA: 1000,
        };
    }
    
    openEnterDepositModal() {
        this.setState({
            enterDepositModalState: true
        });
    }
    closeEnterDepositModal() {
        this.setState({
            enterDepositModalState: false
        });
    }
    render() {
        return (
            <div>
                <Navbar { ...this.props } />
                <div className="bck-gray pt-5">
                    <div className="container">
                        <div className="row flex-md-row account-bids">
                            <Navigation active="balance" />
                            <div className="col col-custom-1 py-5 pl-lg-5 my-lg-5 w-100">
                                <div className="empty-space-60" />
                                <div className="">
                                    <div className="d-flex align-items-center pb-5">
                                        <h4 className="big mb-0">Balance</h4>
                                        <h3 className="text-gradient font-weight-medium ml-auto mb-0">{ this.state.availableADA + this.state.spentADA } ADA</h3>
                                    </div>
                                    <div className="balance-graphic">
                                        <div className="wrapper available" style={{width: this.state.availableADA/(this.state.spentADA + this.state.availableADA) * 100 +'%'}}>
                                            <span />
                                            <b>available</b> { this.state.availableADA } ADA
                                        </div>
                                        <div className="wrapper spent" style={{width: this.state.spentADA/(this.state.spentADA + this.state.availableADA) * 100 +'%'}}>
                                            <span />
                                            <b>unavailable</b> { this.state.spentADA } ADA
                                        </div>
                                    </div>
                                </div>
                                <div className="empty-space-130" />
                                <div className="">
                                    <h4 className="big pb-1 mb-4">Deposit funds</h4>
                                    <p className="text-gray-darker mb-5">Add funding in the form of ada from your crypto wallet to your auction account </p>
                                    <button type="button" onClick={this.openEnterDepositModal} className="btn btn--gradient mr-3">Make a deposit</button>
                                </div>
                                <div className="empty-space-60" />
                            </div>
                        </div>
                    </div>
                    <div className="empty-space-100" />
                </div>
                <Footer />
                <EnterDeposit
                    modalOpen={ this.state.enterDepositModalState }
                    closeEnterDepositModal={ this.closeEnterDepositModal }
                    openConfirmTransactionModal = { this.openConfirmTransactionModal }
                />
            </div>
        )
    }
}