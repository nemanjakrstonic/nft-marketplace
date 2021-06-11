import React from 'react';
import Navbar from "../shared/header/Navbar";
import Footer from "../shared/footer/Footer";
// import Carousel from "react-multi-carousel";
import nfts from "../../resources/category-nfts";

// Resources
// import arrowGray from "../../assets/img/strelicaLevoSiva.svg";
// import arrowRed from "../../assets/img/strelicaDesnoC.svg";
import BlockItem from "./parts/BlockItem";
import Pagination from "./parts/Pagination";

// const responsive = {
//     superLargeDesktop: {
//         breakpoint: { max: 100000, min: 1360 },
//         items: 4,
//         slidesToSlide: 4
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

export default class Category extends React.Component {
    constructor() {
        super();
        this.setCurrentPage = this.setCurrentPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.state = {
            currentPage: 1,
            itemsPerPage: 8
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
        const currentItems = nfts.slice(indexOfFirstItem, indexOfLastItem);
        
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
                                {/*            .map(key => <BlockItem key={key} item={nfts[key]} />)*/}
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
                </div>
                <Footer />
            </div>
        )
    }
}