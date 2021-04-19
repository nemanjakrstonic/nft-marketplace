import React from 'react';
import Navbar from "../shared/header/Navbar";
import Footer from "../shared/footer/Footer";
import Timer from "./Timer";
import artefacts from "../../resources/artefacts";
import YourBid from "./YourBid";
import YourCurrentBid from "./YourCurrentBid";

class SingleItem extends React.Component {
    constructor() {
        super();
        this.updateBid = this.updateBid.bind(this);
        this.state = {
            yourBid: 0
        };
    }
    
    updateBid(amount) {
        this.setState({
            yourBid: amount,
            alreadyBided: true
        });
    }
    
    render() {
        const artefactId = this.props.match.params.artefactId;
        const artefactInfo = artefacts[artefactId];
        return (
            <div>
                <Navbar { ...this.props } />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="bck-gray single-item">
                                <img src={artefactInfo.image} alt="" />
                                <div className="info">
                                    <div>
                                        <label>NAME</label>
                                        <h4 className="smaller">{artefactInfo.name}</h4>
                                    </div>
                                    <div className="text-right">
                                        <label>CURRENT BID</label>
                                        <h4 className="smaller text-gradient">{artefactInfo.current_bid > this.state.yourBid ? artefactInfo.current_bid : this.state.yourBid} ADA</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 single-item-info">
                            <div className="pl-md-5">
                                <h2 className="font-weight-normal py-5 mt-4">Place a bid</h2>
                                <Timer time={artefactInfo.time} />
                                <p className="desc">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                                <div className="row-info">
                                    <span>Category: </span>
                                    <span className="text-orange">{ artefactInfo.category }</span>
                                </div>
                                <div className="row-info">
                                    <span>Owner: </span>
                                    <span className="text-orange">@{ artefactInfo.owner }</span>
                                </div>
                                <h4 className="smaller font-weight-normal mt-5 mb-4">Your bid</h4>
                                { this.state.yourBid !== 0 ?
                                    <div>
                                        <YourCurrentBid bid={this.state.yourBid} />
                                        <h6 className="font-weight-normal mt-5 mb-3">Want to bid more?</h6>
                                    </div>
                                    : '' }
                                <YourBid updateBid={this.updateBid} currentBid={artefactInfo.current_bid} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-5" />
                <Footer />
            </div>
        )
    }
}
export default SingleItem;