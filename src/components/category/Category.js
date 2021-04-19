import React from 'react';
import Navbar from "../shared/header/Navbar";
import Footer from "../shared/footer/Footer";
import categories from "../../resources/popular-categories";
import RelatedItem from "../shared/RelatedItem";

export default class Category extends React.Component {
    
    render() {
        const categoryId = this.props.match.params.categoryId;
        const categoryInfo = categories[categoryId];
        return (
            <div>
                <Navbar { ...this.props } />
                <div className="container container--extended bck-gray category-page mt-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="pb-3 mb-1">{ categoryInfo.name }</h1>
                            <p className="desc">{ categoryInfo.description }</p>
                        </div>
                    </div>
                </div>
                <div className="empty-space-100" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="related-items">
                                {categoryInfo.artefacts.map(function(currentValue, index, arr){
                                    return (
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