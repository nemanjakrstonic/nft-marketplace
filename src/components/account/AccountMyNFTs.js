import React from 'react';
import Navbar from "../shared/header/Navbar";
import Footer from "../shared/footer/Footer";
import Tabs from "./parts/Tabs";
// import Carousel from "react-multi-carousel";
// import nfts from "../../resources/my-nfts";
import {myNFTs} from "../../services/list";

// Resources
// import arrowGray from "../../assets/img/strelicaLevoSiva.svg";
// import arrowRed from "../../assets/img/strelicaDesnoC.svg";
import BlockItem from "./parts/BlockItem";
import PreviewOwnedItem from "./parts/PreviewOwnedItem";
import Pagination from "../category/parts/Pagination";

export default class AccountMyNFTs extends React.Component {
    constructor(props) {
        super(props);
        this.setNFTsScope = this.setNFTsScope.bind(this);
        this.setCurrentPage = this.setCurrentPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.changeTab = this.changeTab.bind(this);
        this.openPreviewItemMode = this.openPreviewItemMode.bind(this);
        this.closePreviewItemMode = this.closePreviewItemMode.bind(this);
        this.state = {
            currentPage: 1,
            itemsPerPage: 6,
            activeTab: 'All',
            error: null,
            isLoaded: false,
            items: [],
            nftsScope: [],
            previewMode: false,
            previewItem: {
                name: '',
                ownedSince: '',
                image: ''
            }
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
                pathname: '/account/my-nfts'
            });
        }
        this.setState({
            currentPage: page
        });
        
        myNFTs().then(
            (result) => {
                if (result.length < this.state.currentPage * this.state.itemsPerPage) {
                    this.setState({
                        currentPage: 1
                    }, () => {
                        this.props.history.push({
                            pathname: '/account/my-nfts'
                        });
                    });
                }
                this.setState({
                    isLoaded: true,
                    items: result,
                    nftsScope: result
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
                pathname: '/account/my-nfts/'+page
            })
        })
    }
    nextPage() {
        let page = parseInt(this.state.currentPage) + 1;
        this.setState({
            currentPage: page
        }, () => {
            this.props.history.push({
                pathname: '/account/my-nfts/'+page
            })
        })
        
    }
    setCurrentPage(page) {
        this.setState({
            currentPage: page
        }, () => {
            if (page === 1) {
                this.props.history.push({
                    pathname: '/account/my-nfts'
                })
            } else {
                this.props.history.push({
                    pathname: '/account/my-nfts/'+page
                })
            }
        })
    }
    changeTab(e) {
        const newTab = e.target.getAttribute("data-tab");
        this.setNFTsScope(e.target.getAttribute("data-type"));
        this.setState({
            activeTab : newTab,
            previewMode: false,
        });
        this.setCurrentPage(1);
    }
    openPreviewItemMode(name, date, image) {
        this.setState({
            previewMode: true,
            previewItem: {
                name: name,
                ownedSince: date,
                image: image
            }
        }, () => {
            this.setState({
                scrollDistance: window.scrollY
            }, () => {
                window.scrollTo(0, 0);
            })
        });
    }
    closePreviewItemMode() {
        this.setState({
            previewMode: false
        }, () => {
            window.scrollTo(0, this.state.scrollDistance);
        });
    }
    
    setNFTsScope(type) {
        let result;
        if (type === 'all') {
            result = this.state.items;
        } else {
            let obj = Object.keys(this.state.items)
                .reduce((o, key) => {
                    this.state.items[key]['type'] === type && (o[key] = this.state.items[key]);
                    return o;
                }, {});
            result = Object.keys(obj).map((k) => obj[k])
        }
        this.setState({
            nftsScope: result
        })
    }
    
    // static getDerivedStateFromProps(props, state) {
    //     if (props.history.action === 'POP') {
    //         // return {
    //         //     previewMode: false
    //         // };
    //         // console.log(props);
    //     }
    //     return null;
    // }
    
    
    render() {
    
        const indexOfLastItem = this.state.currentPage * this.state.itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - this.state.itemsPerPage;
        let currentItems = [];
        if (this.state.nftsScope !== null) {
            currentItems = this.state.nftsScope.slice(indexOfFirstItem, indexOfLastItem);
        } else {
            currentItems = [];
        }
    
        return (
            <div>
                <Navbar { ...this.props } />
                <div className="bck-gray pt-5">
                    <div className="container slider-arrow-items pt-0 text-left">
                        {
                            this.state.previewMode ?
                                <div className="row">
                                    <div className="col-12">
                                        <div className="max-width-px-800 mx-auto">
                                            <PreviewOwnedItem
                                                item={this.state.previewItem}
                                                closePreviewItemMode={this.closePreviewItemMode}
                                            />
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="row flex-lg-row account-bids">
                                    <Tabs
                                        changeTab={this.changeTab}
                                        activeTab={ this.state.activeTab }
                                        tabs={['All', 'My active bids', 'Owned by me']}
                                        types={['all', 'bidded', 'owned']}
                                    />
                                    <div className="col col-custom-1 py-5 pl-lg-5 my-lg-5 w-100">
                                        <div className="position-relative">
                                            <div className="row-no-wrap position-relative">
                                                {
                                                    Object
                                                        .keys(currentItems)
                                                        .map(key =>
                                                            <BlockItem
                                                                key={key}
                                                                item={currentItems[key]}
                                                                openPreviewItemMode={this.openPreviewItemMode}
                                                            />)
                                                }
                                            </div>
                                            {/*<Carousel*/}
                                            {/*    responsive={responsive}*/}
                                            {/*    arrows={false}*/}
                                            {/*    // customButtonGroup={<ButtonGroup />}*/}
                                            {/*    customButtonGroup={<ButtonGroup*/}
                                            {/*        next={this.props.next}*/}
                                            {/*        previous={this.props.previous}*/}
                                            {/*        rest={this.props.rest}*/}
                                            {/*    />}*/}
                                            {/*    renderButtonGroupOutside={true}*/}
                                            {/*>*/}
                                            {/*    {*/}
                                            {/*        Object*/}
                                            {/*            .keys(nfts)*/}
                                            {/*            .map(key =>*/}
                                            {/*                <BlockItem*/}
                                            {/*                    key={key}*/}
                                            {/*                    item={nfts[key]}*/}
                                            {/*                    openPreviewItemMode={this.openPreviewItemMode}*/}
                                            {/*                />)*/}
                                            {/*    }*/}
                                            {/*</Carousel>*/}
                                        </div>
                                        <Pagination
                                            currentPage={this.state.currentPage}
                                            setCurrentPage={this.setCurrentPage}
                                            prevPage={this.prevPage}
                                            nextPage={this.nextPage}
                                            totalPagesNum={Math.ceil(this.state.nftsScope !== null ? this.state.nftsScope.length / this.state.itemsPerPage : 0)}
                                        />
                                    </div>
                                </div>
                            }
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}