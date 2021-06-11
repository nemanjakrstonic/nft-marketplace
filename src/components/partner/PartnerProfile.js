import React from 'react';
import Navbar from "../shared/header/Navbar";
import Footer from "../shared/footer/Footer";
import partners from "../../resources/featured-partners";
import Tabs from "./parts/Tabs";
import RelatedItem from "../shared/RelatedItem";

export default class PartnerProfile extends React.Component {
    constructor() {
        super();
        this.changeTab = this.changeTab.bind(this);
        this.state = {
            activeTab: 'all'
        }
    }
    
    changeTab(e) {
        const newTab = e.target.getAttribute("data-tab");
        this.setState({
            activeTab : newTab,
        });
    }
    
    render() {
        const partnerId = this.props.match.params.partnerId;
        const partnerInfo = partners[partnerId];
        return (
            <div>
                <Navbar { ...this.props } />
                <div className="container container--extended bck-gray partner-profile mt-5">
                    <div className="row">
                        <div className="col-12 p-0">
                            <div className="partner-profile-wrapper">
                                <div className="profile-card">
                                    <div className="partner-brand-wrapper">
                                        {
                                            partnerInfo.profile_image !== '' ?
                                                <img src={ partnerInfo.profile_image } className="partner-brand" alt="" />
                                                :
                                                <img src={ partnerInfo.image } className="partner-brand" alt="" />
                                        }
                                    </div>
                                    <h4 className="smaller">{ partnerInfo.name }</h4>
                                    <p className="address" onClick={() => {navigator.clipboard.writeText(partnerInfo.address)}}>
                                        <span>{ partnerInfo.address }</span>
                                        <img src="/img/link-blue.svg" alt="" />
                                    </p>
                                    <p className="instagram" onClick={() => {navigator.clipboard.writeText(partnerInfo.instagram)}}>
                                        <img src="/img/link-gray.svg" alt="" />
                                        <span>{ partnerInfo.instagram }</span>
                                    </p>
                                </div>
                                <h1 className="mb-5">@{ partnerInfo.name }</h1>
                                <p className="description">{ partnerInfo.description }</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="empty-space-60" />
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-right">
                            <Tabs changeTab={this.changeTab} activeTab={ this.state.activeTab } tabs={partnerInfo.artefacts} />
                        </div>
                    </div>
                </div>
                <div className="empty-space-130" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="related-items">
                                {partnerInfo.artefacts[this.state.activeTab].items.map(function(currentValue, index, arr){
                                    return (
                                        // <p key={index}>{currentValue}</p>
                                        <RelatedItem key={index} artefactId={currentValue} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}