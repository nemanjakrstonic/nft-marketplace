import React from 'react';
import FeaturedPartner from "./FeaturedPartner";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import featuredPartners from '../../resources/featured-partners';


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide, totalItems, slidesToShow } } = rest;
    const grayBtn = <img src="img/arrow-gray.svg" alt="" />;
    const coloredBtn = <img src="img/arrow-red.svg" alt="" />;
    return (
        <div className="carousel-button-group">
            <button aria-label="Go to previous slide" className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} >
                { grayBtn }
                { coloredBtn }
            </button>
            <button aria-label="Go to next slide" className={currentSlide === totalItems - slidesToShow ? 'disable' : ''} onClick={() => next()} >
                { grayBtn }
                { coloredBtn }
            </button>
            {/*<button aria-label="Go to exact slide" onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </button>*/}
        </div>
    );
}
class FeaturedPartners extends React.Component {
    
    render() {
        return (
            <div className="container container--extended bck-gray featured-partners">
                <div className="row">
                    <div className="col-12">
                        <div>
                            <h4 className="pl-4">Featured partners</h4>
                        </div>
                        <Carousel
                            responsive={responsive}
                            arrows={false}
                            // customButtonGroup={<ButtonGroup />}
                            customButtonGroup={<ButtonGroup
                                next={this.props.next}
                                previous={this.props.previous}
                                rest={this.props.rest}
                            />}
                            renderButtonGroupOutside={true}
                        >
                            {
                                Object
                                    .keys(featuredPartners)
                                    .map(key => <FeaturedPartner key={key} id={key} partner={featuredPartners[key]} />)
                            }
                        </Carousel>
                    </div>
                </div>
            </div>
        )
    }
}
export default FeaturedPartners;