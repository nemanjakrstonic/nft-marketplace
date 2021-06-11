import React from 'react';
import SingleItem from "./SingleItem";

export default class BlockItem extends React.Component {
    
    render() {
        const { item } = this.props;
        return (
            <div className="single-nft-wrapper">
                <div className="single-nft">
                    <SingleItem item={item} />
                </div>
            </div>
        )
    }
}