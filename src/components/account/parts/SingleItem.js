import React from 'react';
import {Link} from "react-router-dom";

export default class SingleItem extends React.Component {
    
    previewItem = (e, name = '', date = '', image = '', type = '') => {
        if (type === 'owned') {
            e.preventDefault();
        }
        this.props.openPreviewItemMode(name, date, image);
    }
    
    render() {
        const { item } = this.props;
    
        return (
            <Link to={item.url} onClick={(e) => this.previewItem(e, item.title, item.finish, item.image, item.type)}>
                <div className="slider-item text-left">
                    <div className="image">
                        <img src={`/res-img/`+item.image} alt="" />
                    </div>
                    <h4 className="title smaller pt-4 mt-2 pb-3 mb-1">{ item.title }</h4>
                    <div className="price-type-wrapper">
                        <p className="text-gradient price font-weight-medium pb-0 mb-0">{ item.bid } ADA</p>
                        {
                            item.type === 'owned' ?
                                <span className="label-type label-green">Owned</span>
                                :
                                <span className="label-type"><span className="text-gradient">Active bid</span></span>
                        }
                    </div>
            
                    {
                        item.type === 'owned' ?
                            <div className="bid-info">
                                <span>Owned since:</span>
                                <span className="highest-bid">{ item.finish }</span>
                            </div>
                            :
                            item.available === true ?
                                <div className="bid-info">
                                    <span>Starts:</span>
                                    <span className="highest-bid">{ item.starts }</span>
                                </div>
                                :
                                <div className="bid-info">
                                    <span>Ends:</span>
                                    <span className="highest-bid">{ item.ends }</span>
                                </div>
                    }
                </div>
            </Link>
        )
    }
}