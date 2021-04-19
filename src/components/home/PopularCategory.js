import React from 'react';
import {Link} from "react-router-dom";

export default class PopularCategory extends React.Component {
    
    render() {
        const { id, category } = this.props;
        const small_images = category.small_images.map((img, index) =>
            <div className="item" key={index}>
                <img src={ img } alt="" />
            </div>
        );
        return (
            <Link to={`/category/${id}`} className="popular-category">
                <img src={ category.main_image } className="main-image" alt="" />
                <div className="desc-row">
                    { small_images }
                </div>
                <div className="info">
                    <h4 className="smaller mb-0">{ category.name }</h4>
                    <p className="label-orange"><span className="count">{ category.count }</span><span className="unit">items</span></p>
                </div>
            </Link>
        )
    }
}