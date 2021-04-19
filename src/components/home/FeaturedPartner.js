import React from 'react';
import {Link} from "react-router-dom";

export default class FeaturedPartner extends React.Component {
    
    render() {
        const { id, partner } = this.props;
        return (
            <Link to={`/partner/${id}`}>
                <div className="partners-aligment">
                    <div className="featured-partner">
                        <div className="header">
                            <span className="num">#<span>{ partner.rank }</span></span>
                            <div className="export">
                                <img src="img/export.svg" alt="" />
                            </div>
                        </div>
                        <img src={ partner.image } className="partner-brand" alt="" />
                        <h6 className="title">{ partner.name }</h6>
                        <p className="mb-0 d-flex align-items-center justify-content-center"><span className="count">{ partner.count }</span><span className="unit">items</span></p>
                    </div>
                </div>
            </Link>
        )
    }
}