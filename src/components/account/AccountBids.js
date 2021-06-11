import React from 'react';
import Navbar from "../shared/header/Navbar";
import Footer from "../shared/footer/Footer";
import bids from "../../resources/bids";
import Bid from "./parts/Bid";
import Navigation from "./parts/Navigation";

export default class AccountBids extends React.Component {
    
    render() {
        return (
            <div>
                <Navbar { ...this.props } />
                <div className="bck-gray pt-5">
                    <div className="container">
                        <div className="row flex-lg-row account-bids">
                            <Navigation active="active bids" />
                            <div className="col col-custom-1 py-5 pl-lg-5 my-lg-5 w-100">
                                <div className="">
                                    <table className="all-bids">
                                        <thead>
                                            <tr>
                                                <th>DESCRIPTION</th>
                                                <th>STATUS</th>
                                                <th>AMOUNT</th>
                                                <th>DATE</th>
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {bids.map(function(currentValue, index, arr){
                                                return (
                                                    <Bid
                                                        key={index}
                                                        item={currentValue}
                                                    />
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="empty-space-100" />
                </div>
                <Footer />
            </div>
        )
    }
}