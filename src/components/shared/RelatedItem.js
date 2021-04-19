import React from 'react';
import {Link} from "react-router-dom";
import artefacts from "../../resources/artefacts";

export default class RelatedItem extends React.Component {
    
    render() {
        const { artefactId } = this.props;
        const artefact = artefacts[artefactId];
        return (
            <div className="related-item">
                <Link to={`/artefact/${artefactId}`}>
                    <img src={ artefact.image } className="related-item-img" alt="" />
                    <h4 className="title smaller">{ artefact.name }</h4>
                    <p className="text-gradient price">{ artefact.current_bid } ADA</p>
                    <div className="bid-info">
                        <span>Highest bid</span>
                        <span className="highest-bid">{ artefact.highest_bid } ADA</span>
                        <span className="ml-auto fire-icon">Bid now <img src="/img/fire.jpg" alt="" /></span>
                    </div>
                </Link>
            </div>
        )
    }
}