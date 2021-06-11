import React from 'react';
import Navbar from "../shared/header/Navbar";
import Footer from "../shared/footer/Footer";
import Timer from "./parts/Timer";
import artefacts from "../../resources/artefacts";
import YourBid from "./parts/YourBid";
import YourCurrentBid from "./parts/YourCurrentBid";
import {Link} from "react-router-dom";
import ConfirmBid from "./parts/ConfirmBid";
import NotEnoughADA from "./parts/NotEnoughADA";
import { useHistory } from "react-router-dom";

// Resources
import download from "../../assets/img/download-orange.svg";
import arrowGray from "../../assets/img/arrow-btn-link-left.svg";

class SingleItem extends React.Component {
    constructor() {
        super();
        this.updateYourEnterBid = this.updateYourEnterBid.bind(this);
        this.openConfirmBidModal = this.openConfirmBidModal.bind(this);
        this.closeConfirmBidModal = this.closeConfirmBidModal.bind(this);
        this.openNotEnoughADAModal = this.openNotEnoughADAModal.bind(this);
        this.closeNotEnoughADAModal = this.closeNotEnoughADAModal.bind(this);
        this.confirmBid = this.confirmBid.bind(this);
        this.goBack = this.goBack.bind(this); // i think you are missing this
        this.state = {
            id: '',
            name: '',
            image: '',
            time: 0,
            currentBid: 0,
            yourConfirmBid: 0,
            yourEnterBid: '',
            confirmBidModalState: false,
            notEnoughADAModalState: false,
        };
    }
    
    openConfirmBidModal() {
        this.setState({
            confirmBidModalState: true
        });
    }
    updateYourEnterBid(amount) {
        // console.log(amount);
        this.setState({
            yourEnterBid: amount
        });
    }
    closeConfirmBidModal() {
        this.setState({
            confirmBidModalState: false
        });
    }
    openNotEnoughADAModal() {
        this.setState({
            notEnoughADAModalState: true
        });
    }
    closeNotEnoughADAModal() {
        this.setState({
            notEnoughADAModalState: false
        });
    }
    
    confirmBid() {
        this.setState({
            yourConfirmBid: this.state.yourEnterBid
        }, () => {
            if (this.state.yourConfirmBid > this.state.currentBid) {
                this.setState({
                    currentBid: this.state.yourEnterBid,
                    yourEnterBid: ''
                });
            }
        });
    }
    
    componentDidMount() {
        const artefactId = this.props.match.params.artefactId;
        const artefactInfo = artefacts[artefactId];
        this.setState({
            id: artefactId,
            image: artefactInfo.image,
            name: artefactInfo.name,
            time: artefactInfo.time,
            ended: artefactInfo.ended,
            available: artefactInfo.available,
            currentBid: artefactInfo.current_bid,
        }, () => {
            // let timeLeftVar = this.secondsToTime(this.state.seconds);
            // this.setState({ time: timeLeftVar });
            // this.startTimer();
        });
    }
    goBack(){
        this.props.history.goBack();
    }
    
    render() {
        return (
            <div>
                <Navbar { ...this.props } />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-6 d-lg-flex">
                            <div className="bck-gray single-item">
                                <div className="mb-5">
                                    <button type="button" className="btn btn--link arrow-left" onClick={this.goBack}>
                                        <img src={ arrowGray } alt="" />
                                        Back to all
                                    </button>
                                </div>
                                <img src={this.state.image} alt="" />
                                <div className="info">
                                    <h4 className="smaller pb-3">{this.state.name}</h4>
                                    <p className="desc">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                                </div>
                                <div className="line">
                                    <label className="text-black font-size-14 mb-0">Created by: <span className="text-orange">@walfram</span></label>
                                    <button type="button" className="btn btn--link download">
                                        <img src={ download } alt="" />
                                        View notebook
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 single-item-info">
                                <div className="pl-lg-5 py-5 my-4">
                                    <div className="d-flex align-items-center pb-5">
                                        <h2 className="font-weight-normal mb-0">{ this.state.ended !== '' ? 'Auction ended' : 'Place a bid' }</h2>
                                    </div>
                                    { this.state.ended !== '' ?
                                        <div className="timer ended">
                                            <p className="time-label">AUCTION ENDED</p>
                                            <div className="ml-auto">
                                                <div className="endend-day">{ this.state.ended }</div>
                                            </div>
                                        </div>
                                        :
                                        <Timer time={this.state.time} available={this.state.available} />
                                    }
                                    <div className="row-info pt-5">
                                        <span>Number of bids: </span>
                                        <span className="text-orange">63</span>
                                    </div>
                                    <div className="row-info">
                                        <span>Ends: </span>
                                        <span className="text-orange">23/07/21 19:15 GMT</span>
                                    </div>
            
                                    {
                                        !this.state.available ?
                                            <div className="pt-4 mt-5">
                                                <div className="mt-5 mb-4">
                                                    <h4 className="smaller font-weight-normal mb-5">Highest bid: <span className="text-gradient font-weight-medium">{ this.state.currentBid } ADA</span></h4>
                                                    <h4 className="smaller font-weight-normal pb-1 mb-4">Your bid: </h4>
                                                </div>
                                                <YourCurrentBid
                                                    yourConfirmBid={this.state.yourConfirmBid}
                                                    currentBid={this.state.currentBid}
                                                />
                                                <YourBid
                                                    currentBid={this.state.currentBid}
                                                    updateYourEnterBid={this.updateYourEnterBid}
                                                    openConfirmBidModal={this.openConfirmBidModal}
                                                    yourEnterBid={this.state.yourEnterBid}
                                                    openNotEnoughADAModal={this.openNotEnoughADAModal}
                                                />
                                                <p className="text-gray-medium pt-5">Not sure how to place a bid? <Link to="#" className="hover-effect-1">Visit Help</Link>.</p>
                                            </div>
                                            :
                                            ''
                                    }
                                </div>
                            </div>
                    </div>
                </div>
                <div className="pb-sm-5" />
                <Footer />
                <ConfirmBid
                    bidAmount={this.state.yourEnterBid}
                    address={"0xC6b7E71D81CD06FBc850bbB70C6b7E71D81CD06FBc850bbB70"}
                    image={this.state.image}
                    modalOpen={this.state.confirmBidModalState}
                    closeConfirmBidModal={this.closeConfirmBidModal}
                    confirmBid={this.confirmBid}
                />
                <NotEnoughADA
                    modalOpen={this.state.notEnoughADAModalState}
                    closeNotEnoughADAModal={this.closeNotEnoughADAModal}
                />
            </div>
        )
    }
}
export default SingleItem;