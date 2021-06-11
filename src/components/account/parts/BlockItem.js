import React from 'react';
import SingleItem from "./SingleItem";

export default class BlockItem extends React.Component {
    
    render() {
        return (
            <div className="single-nft-wrapper third">
                <div className="single-nft white">
                    <SingleItem
                        item={this.props.item}
                        openPreviewItemMode={this.props.openPreviewItemMode} />
                </div>
            </div>
        )
    }
}