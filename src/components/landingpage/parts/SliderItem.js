import React from 'react';
import {Link} from "react-router-dom";

export default class SliderItem extends React.Component {
    
    render() {
        const { item } = this.props;
        return (
            <Link to={item.url}>
                <div className="slider-item-wrapper">
                    <div className="slider-item home">
                        <div className="image">
                            <img src={`/res-img/`+item.image} alt="" />
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}