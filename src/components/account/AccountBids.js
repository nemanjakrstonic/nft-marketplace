import React from 'react';
import Navbar from "../shared/header/Navbar";
import Footer from "../shared/footer/Footer";
// import bids from "../../resources/bids";
import Bid from "./parts/Bid";
import Navigation from "./parts/Navigation";
import {bids} from "../../services/list";
import Pagination from "../category/parts/Pagination";

export default class AccountBids extends React.Component {
    constructor(props) {
        super(props);
        this.setCurrentPage = this.setCurrentPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.state = {
            currentPage: 1,
            itemsPerPage: 10,
            error: null,
            isLoaded: false,
            items: []
        }
    }
    
    
    componentDidMount() {
        const param = this.props.match.params.page;
        let page = 1;
        if (this.isPositiveInteger(param)) {
            page = param;
        } else if (param === undefined) {
            page = 1;
        } else {
            page = 1;
            this.props.history.push({
                pathname: '/account/bids'
            });
        }
        this.setState({
            currentPage: page
        });
        
        bids().then(
            (result) => {
                if (result.length < this.state.currentPage * this.state.itemsPerPage) {
                    this.setState({
                        currentPage: 1
                    }, () => {
                        this.props.history.push({
                            pathname: '/account/bids'
                        });
                    });
                }
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        );
    }
    isPositiveInteger(n) {
        return n >>> 0 === parseFloat(n);
    }
    prevPage() {
        let page = parseInt(this.state.currentPage) - 1
        this.setState({
            currentPage: page
        }, () => {
            this.props.history.push({
                pathname: '/account/bids/'+page
            })
        })
    }
    nextPage() {
        let page = parseInt(this.state.currentPage) + 1;
        this.setState({
            currentPage: page
        }, () => {
            this.props.history.push({
                pathname: '/account/bids/'+page
            })
        })
        
    }
    setCurrentPage(page) {
        this.setState({
            currentPage: page
        }, () => {
            this.props.history.push({
                pathname: '/account/bids/'+page
            })
        })
    }
    
    render() {
    
        const indexOfLastItem = this.state.currentPage * this.state.itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - this.state.itemsPerPage;
        const currentItems = this.state.items.slice(indexOfFirstItem, indexOfLastItem);
        const totalPagesNum = Math.ceil(this.state.items.length / this.state.itemsPerPage);
    
        
        return (
            <div>
                <Navbar { ...this.props } />
                <div className="bck-gray pt-5">
                    <div className="container">
                        <div className="row flex-lg-row account-bids">
                            <Navigation active="active bids" />
                            <div className="col col-custom-1 pt-5 pl-lg-5 my-lg-5 w-100">
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

                                            {currentItems.map(function(currentValue, index, arr){
                                                return (
                                                    <Bid
                                                        key={index}
                                                        item={currentValue}
                                                    />
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                    {
                                        this.state.currentPage.toString() < totalPagesNum.toString() || this.state.currentPage.toString() !== '0' ?
                                            <Pagination
                                                currentPage={this.state.currentPage}
                                                setCurrentPage={this.setCurrentPage}
                                                prevPage={this.prevPage}
                                                nextPage={this.nextPage}
                                                totalPagesNum={totalPagesNum}
                                            />
                                            :
                                            ''
                                    }
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