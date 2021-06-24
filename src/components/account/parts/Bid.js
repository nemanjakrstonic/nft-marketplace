import React from 'react';
import {Link} from "react-router-dom";

// Resources
import arrowGray from "../../../assets/img/arrow-right-gray.svg";
import arrowColor from "../../../assets/img/strelicaDesnoC.svg";

export default class Bid extends React.Component {
    
    render() {
        
        const { item } = this.props;
        
        return (
            <tr className={(item.highest === 1 ? 'highest' : 'outbid')}>
                <td className="name" data-title="NFT">{ item.name }</td>
                <td className="status" data-title="STATUS">
                    {
                        item.highest === 1 ?
                            <label>Winning</label>
                            :
                            <label>Outbid</label>
                    }
                </td>
                <td className="amount" data-title="AMOUNT">{ item.amount } ADA</td>
                <td className="text-gray-medium" data-title="DATE">{ item.date }</td>
                <td>
                    <Link to={"/nft/"+item.name} className="open">
                        <span>View NFT</span>
                        <img src={ arrowGray } alt="Visit" />
                        <img src={ arrowColor } alt="Visit" />
                    </Link>
                </td>
            </tr>
        )
    }
}