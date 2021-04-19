import React from 'react';

export default class YourCurrentBid extends React.Component {
    render() {
        const { bid } = this.props;
        return (
            <div>
                <div className="your-current-bid">
                    <span className="text">YOUR CURRENT BID</span>
                    <span className="amount">{ bid } ADA</span>
                </div>
            </div>
        )
    }
}