import React from 'react';
import PopularCategory from "./PopularCategory";
import categories from "../../resources/popular-categories";

export default class PopularCategories extends React.Component {
    
    render() {
        return (
            <div className="container popular-categories">
                <div className="row">
                    <div className="col-12">
                        <h4 className="mb-5">Popular categories</h4>
                        <div className="categories-wrapper">
                            {
                                Object
                                    .keys(categories)
                                    .map((key, index) => <PopularCategory key={index} id={key} category={categories[key]} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}