import React from 'react';

// Resources
import arrowGray from "../../../assets/img/arrow-btn-link-left.svg";


export default class PreviewOwnedItem extends React.Component {
    
    closePreview = () => {
        this.props.closePreviewItemMode();
    }
    
    render() {
        const { item } = this.props;
        return (
            <div className="mt-5">
                <button type="button" className="btn btn--link arrow-left mb-5" onClick={this.closePreview}>
                    <img src={ arrowGray } alt="" />
                    Back to all
                </button>
                <h4 className="big pb-4 mb-2">{ item.name }</h4>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                <div className="row-info mt-5">
                    <span>Final price: </span>
                    <span className="text-orange">2345 ADA</span>
                </div>
                <div className="row-info">
                    <span>Owned since: </span>
                    <span className="text-orange">{ item.ownedSince }</span>
                </div>
                <div className="row-info">
                    <span>Created by: </span>
                    <span className="text-orange">@walfram</span>
                </div>
                <div className="row-info">
                    <span>Notebook: </span>
                    <span className="text-orange">link</span>
                </div>
                <div className="owned-nft-preview-image mt-5">
                    <img src={`/res-img/`+item.image} alt="" />
                </div>
            </div>
        )
    }
}