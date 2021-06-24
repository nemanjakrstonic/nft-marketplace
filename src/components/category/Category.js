import React from 'react';
import Navbar from "../shared/header/Navbar";
import Footer from "../shared/footer/Footer";
import { getNFTs } from '../../services/list';

import BlockItem from "./parts/BlockItem";
import Pagination from "./parts/Pagination";


export default class Category extends React.Component {
    constructor(props) {
        super(props);
        this.setCurrentPage = this.setCurrentPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.state = {
            currentPage: 1,
            itemsPerPage: 8,
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
                    pathname: '/category'
                });
            }
        this.setState({
            currentPage: page
        });
        getNFTs().then(
            (result) => {
                if (result.length < this.state.currentPage * this.state.itemsPerPage) {
                    this.setState({
                        currentPage: 1
                    }, () => {
                        this.props.history.push({
                            pathname: '/category'
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
                pathname: '/category/'+page
            })
        })
    }
    nextPage() {
        let page = parseInt(this.state.currentPage) + 1;
        this.setState({
            currentPage: page
        }, () => {
            this.props.history.push({
                pathname: '/category/'+page
            })
        })
        
    }
    setCurrentPage(page) {
        this.setState({
            currentPage: page
        }, () => {
            this.props.history.push({
                pathname: '/category/'+page
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
                <div className="container container--extended bck-black category-page mt-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-white pb-3 mb-1">The Collection</h1>
                            <p className="desc text-gray-medium">Explore the world of  models with the potential to represent fundamental physics</p>
                        </div>
                    </div>
                </div>
                <div className="container slider-arrow-items pt-5 mt-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="row-no-wrap position-relative">
                                {
                                    Object
                                        .keys(currentItems)
                                        .map(key => <BlockItem key={key} item={currentItems[key]} />)
                                }
                            </div>
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
                <Footer />
            </div>
        )
    }
}