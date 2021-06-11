import React from 'react';

export default class YourCurrentBid extends React.Component {
    render() {
        const { yourConfirmBid, currentBid } = this.props;
        const success = yourConfirmBid === currentBid;
        // console.log(yourConfirmBid, currentBid)
        return (
            yourConfirmBid !== 0 ?
                <div>
                    <div className={"your-current-bid " + (success ? 'success' :'error')}>
                        { success ?
                            <span className="text">Your bid of { yourConfirmBid } ADA is currently the highest bid for this item.</span>
                            :
                            <span className="text">Your bid of { yourConfirmBid } ADA has been outbid by another user.</span>
                        }
                    </div>
                    <h6 className="font-weight-normal mt-5 mb-3">Want to bid more?</h6>
                </div>
                :
                ''
        )
    }
}