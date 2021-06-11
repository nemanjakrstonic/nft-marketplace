import React from 'react';
import Navbar from "../shared/header/Navbar";
import Footer from "../shared/footer/Footer";
import Tabs from "./parts/Tabs";
// import Carousel from "react-multi-carousel";
import nfts from "../../resources/my-nfts";

// Resources
// import arrowGray from "../../assets/img/strelicaLevoSiva.svg";
// import arrowRed from "../../assets/img/strelicaDesnoC.svg";
import BlockItem from "./parts/BlockItem";
import PreviewOwnedItem from "./parts/PreviewOwnedItem";
import Pagination from "../category/parts/Pagination";

// const responsive = {
//     superLargeDesktop: {
//         breakpoint: { max: 100000, min: 1360 },
//         items: 3,
//         slidesToSlide: 3
//     },
//     desktop: {
//         breakpoint: { max: 1360, min: 992 },
//         items: 3,
//         slidesToSlide: 3
//     },
//     tablet: {
//         breakpoint: { max: 991, min: 464 },
//         items: 2,
//         slidesToSlide: 2
//     },
//     mobile: {
//         breakpoint: { max: 464, min: 0 },
//         items: 2,
//         slidesToSlide: 2
//     }
// };
//
// const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
//     const { carouselState: { currentSlide, totalItems, slidesToShow } } = rest;
//     const grayBtn = <img src={arrowGray} alt="" />;
//     const coloredBtn = <img src={arrowRed} alt="" />;
//     return (
//         <div className="carousel-button-group">
//             <button aria-label="Go to previous slide" className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} >
//                 { grayBtn }
//                 { coloredBtn }
//             </button>
//             <button aria-label="Go to next slide" className={currentSlide === totalItems - slidesToShow ? 'disable' : ''} onClick={() => next()} >
//                 { grayBtn }
//                 { coloredBtn }
//             </button>
//             {/*<button aria-label="Go to exact slide" onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </button>*/}
//         </div>
//     );
// }

export default class AccountMyNFTs extends React.Component {
    constructor() {
        super();
        this.setCurrentPage = this.setCurrentPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.changeTab = this.changeTab.bind(this);
        this.openPreviewItemMode = this.openPreviewItemMode.bind(this);
        this.closePreviewItemMode = this.closePreviewItemMode.bind(this);
        this.state = {
            currentPage: 1,
            itemsPerPage: 6,
            activeTab: '0',
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
        const page = param?param:1
        this.setState({
            currentPage: page
        })
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
            this.props.history.push({
                pathname: '/account/my-nfts/'+page
            })
        })
    }
    
    changeTab(e) {
        const newTab = e.target.getAttribute("data-tab");
        this.setState({
            activeTab : newTab,
            previewMode: false,
        });
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
    
    static getDerivedStateFromProps(props, state) {
        if (props.history.action === 'POP') {
            // return {
            //     previewMode: false
            // };
            console.log(props);
        }
        return null;
    }
    
    
    render() {
    
        const indexOfLastItem = this.state.currentPage * this.state.itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - this.state.itemsPerPage;
        const currentItems = nfts.slice(indexOfFirstItem, indexOfLastItem);
    
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
                                    <Tabs changeTab={this.changeTab} activeTab={ this.state.activeTab } tabs={['All', 'My bids', 'Owned by me']} />
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
                                            totalItemsNum={Math.ceil(nfts.length / this.state.itemsPerPage)}
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