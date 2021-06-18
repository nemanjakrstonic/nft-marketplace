import React from 'react';
import {Link} from "react-router-dom";

export default class SingleItem extends React.Component {
    
    render() {
        const { item } = this.props;
        return (
            <Link to={item.url}>
                <div className="slider-item higher text-left">
                    <div className="image">
                        <img src={`/res-img/`+item.image} alt="" />
                    </div>
                    {
                        item.ended === true ?
                            <div className="label-state mt-4 purple"><span>ENDED</span></div>
                            :
                            item.available === true ?
                                <div className="label-state mt-4 red"><span>ACCEPTING BIDS</span></div>
                                :
                                <div className="label-state mt-4 green"><span>SCHEDULED</span></div>
                    }
                    <h4 className="title smaller pt-3 pb-3 mt-1 mb-1">{ item.title }</h4>
                    <div className="price-type-wrapper pb-3 mb-3">
                        {
                            item.ended === true ?
                                <p className="text-purple price pb-0 mb-0">Final price: <span className="font-weight-medium">{ item.bid } ADA</span></p>
                                :
                                item.available === true ?
                                    <p className="text-orange price pb-0 mb-0">Current price: <span className="font-weight-medium">{ item.bid } ADA</span></p>
                                    :
                                    <p className="text-green price pb-0 mb-0">Starting price: <span className="font-weight-medium">{ item.bid } ADA</span></p>
                        }
                    </div>
                    {
                        item.ended !== true ?
                            item.available === true ?
                                <div className="bid-info">
                                    <span>Ends:</span>
                                    <span className="highest-bid">{ item.ends }</span>
                                    <p className="bids-num pb-0 mb-0">{ item.bids } bids</p>
                                </div>
                                :
                                <div className="bid-info">
                                    <span>Starts:</span>
                                    <span className="highest-bid">{ item.starts }</span>
                                </div>
                            :
                            <div className="bid-info" />
                    }
                </div>
            </Link>
        )
    }
}