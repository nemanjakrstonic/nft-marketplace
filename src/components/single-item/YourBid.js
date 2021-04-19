import React from 'react';

export default class YourBid extends React.Component {
    
    newBid(e) {
        e.preventDefault();
        const newBid = this.amount.value;
        console.log(newBid, this.props.currentBid);
        if (newBid > this.props.currentBid) {
            this.props.updateBid(newBid);
            this.form.reset();
        }
    }
    
    render() {
        return (
            <div>
                <div className="your-bid">
                    <form ref={(input) => this.form = input} onSubmit={(e) => this.newBid(e)}>
                        <input type="text" placeholder="Enter amount..." ref={(input) => this.amount = input} />
                        <button type="submit" className="btn btn--gradient ml-3">Bid now</button>
                    </form>
                </div>
            </div>
        )
    }
}