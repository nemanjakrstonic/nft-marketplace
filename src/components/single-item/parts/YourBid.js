import React from 'react';
import {Link} from "react-router-dom";
// import {disableClick} from "../../helpers/functions";

export default class YourBid extends React.Component {
    
    // newBid(e) {
    //     e.preventDefault();
    //     const newBid = this.amount.value;
    //     if (newBid > this.props.currentBid) {
    //         this.props.updateBid(newBid);
    //         this.form.reset();
    //     }
    // }
    checkWallet(e, yourEnterBid) {
        e.preventDefault();
        if (yourEnterBid > 0 && yourEnterBid < 10000) {
            this.props.openConfirmBidModal();
        } else if (yourEnterBid > 0) {
            this.props.openNotEnoughADAModal();
        }
    }
    updateEnteredBid(e) {
        this.props.updateYourEnterBid(e.target.value);
    }
    
    render() {
        
        let { currentBid, yourEnterBid } = this.props;
        let smallestPossibleBid = currentBid + 1;
        return (
            <div>
                <div className="your-bid">
                    <form ref={(input) => this.form = input} onSubmit={(e) => this.checkWallet(e, yourEnterBid)}>
                        <label className="currency-after mb-0">
                            <input type="number" placeholder={ "Enter " + smallestPossibleBid + " or more..." } value={yourEnterBid} onChange={(e) => this.updateEnteredBid(e)} />
                            <span className="currency text-gradient">ADA</span>
                        </label>
                        <div className="d-block d-xl-none" />
                        <button type="submit" className="btn btn--gradient ml-0 ml-xl-3 mt-3 mt-xl-0">Bid now</button>
                        <Link to="/account/balance" className="btn btn--white ml-sm-3 ml-3 mt-3 mt-xl-0">View balance</Link>
                    </form>
                </div>
            </div>
        )
    }
}