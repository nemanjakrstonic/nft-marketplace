import React from 'react';
import {Link} from "react-router-dom";

export default class RelatedItem extends React.Component {
    
    render() {
        const { item } = this.props;
        
        return (
            <div className="related-item">
                <Link to={ item.url }>
                    <img src={ item.image } className="related-item-img" alt="" />
                    <h4 className="title smaller">{ item.name }</h4>
                    <p className="text-gradient price">{ item.current_bid } ADA</p>
                    <div className="bid-info">
                        <span>Highest bid</span>
                        <span className="highest-bid">{ item.highest_bid } ADA</span>
                    </div>
                </Link>
            </div>
        )
    }
}