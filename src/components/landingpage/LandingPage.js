import React, {useRef} from 'react';
import Navbar from "../shared/header/Navbar";
import Footer from "../shared/footer/Footer";
import {Link} from "react-router-dom";
import useOnScreen from "../helpers/IsVisible";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderItem from "./parts/SliderItem";
import Timer from "./parts/Timer";
import { disableClick } from "../helpers/functions";

// Resources
import illustration1 from "../../assets/img/illustration1.svg";
import illustration2 from "../../assets/img/illustration2.svg";
import illustration3 from "../../assets/img/illustration3.svg";
import illustration4 from "../../assets/img/illustration4.svg";
import wlogo from "../../assets/img/wolfram-research-logo.svg";
import sliderItems from '../../resources/slider-items';

const TimeLineTitle = (props) => {
    const ref = useRef()
    const isVisible = useOnScreen(ref)
    return <h6 ref={ref} className={"font-weight-bold pb-1 mb-3 timeline-is-in-viewport " + (isVisible ? 'active' : '')}>{ props.title }</h6>
}
const TimeLineImage = (props) => {
    const ref = useRef()
    const isVisible = useOnScreen(ref)
    return <img ref={ref} src={props.image} className={(isVisible ? 'active' : '')} alt="" />
}

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 100000, min: 1360 },
        items: 4,
        slidesToSlide: 4
    },
    desktop: {
        breakpoint: { max: 1360, min: 992 },
        items: 3,
        slidesToSlide: 3
    },
    tablet: {
        breakpoint: { max: 991, min: 464 },
        items: 2,
        slidesToSlide: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        slidesToSlide: 2
    }
};

const CustomDot = ({ onClick, ...rest }) => {
    const {
        active
    } = rest;
    // const carouselItems = [CarouselItem1, CaourselItem2, CarouselItem3];
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
        <button
            className={active ? "active" : "inactive"}
            onClick={() => onClick()}
        >
        </button>
    );
};

class LandingPage extends React.Component {
    constructor(props) {
        super(props)
        this.howItWorks = React.createRef()
    }
    executeScroll = () => this.howItWorks.current.scrollIntoView()
    
    render() {
        return (
            <div>
                <Navbar { ...this.props } />
                <div className="empty-space-130"/>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 mr-auto pb-5 mb-5 pb-lg-0 mb-lg-0">
                            <h6 className="subheading pb-1 mb-3"><span className="text-gradient">OUR INAUGURAL</span></h6>
                            <h1 className="font-weight-normal pb-3 mb-4">WOLFRAM NFT AUCTION</h1>
                            <p className="pb-3 mb-4">Wolfram Research and Wolfram Blockchain Labs presents our initial collection of NFTs built on the Cardano blockchain at our “Items from the Computational Universe” Auction.<br/><br/>We invite you to join the live event on 15 June, where the “Items from the Computational Universe” will be “live minted”, selected and represented as non-fungible tokens (NFTs) on the Cardano blockchain, and will be made available on LiveMinting.com to some lucky people who have attended Wolfram Virtual Events or Cardano Virtual Events for free.</p>
                            <Link to="/sign-up" className="btn btn--gradient mr-4">Register</Link>
                            <Link to="#" onClick={this.executeScroll} className="btn btn--white">Learn more</Link>
                        </div>
                        <div className="col-lg-6">
                            <div className="countdown text-center">
                                <Timer ends="06/15/2021 00:00:00 GMT-0000" />
                                <img src={wlogo} alt="" />
                                <p className="pb-4 mb-2">In partnership with IOHK.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="empty-space-130"/>
                <div className="container container--extended bck-gray bck-color-padding br-6 px-lg-5">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="big font-weight-normal mb-5">ABOUT US</h4>
                            <h5 className="mb-3">Wolfram</h5>
                            <p className="mb-5">Founded by Stephen Wolfram in 1987, Wolfram Research is one of the world’s most respected computer, web, and cloud software companies—as well as a powerhouse of scientific and technical innovation. As pioneers in computation and computational knowledge, we have pursued a long-term vision to develop the science, technology, and tools to make computation an ever-more-potent force in today’s and tomorrow’s world.</p>
                            <h5 className="mb-3">Wolfram Blockchain Labs</h5>
                            <p className="mb-5">Wolfram Blockchain Labs provides distributed ledger technology ecosystems with the tools necessary to assist in the development of a wide variety of smart, contract-based applications. Wolfram Blockchain Labs is the DLT-focused subsidiary of Wolfram Research, Inc., creator of Mathematica, Wolfram|Alpha and the Wolfram Language. Wolfram is the leader in developing technology and tools that inject sophisticated computational intelligence into everything.</p>
                            <h5 className="mb-3">Cardano</h5>
                            <p className="mb-5">Cardano is a decentralized third-generation proof-of-stake blockchain platform. It distinguishes itself from other blockchains through a commitment to peer-reviewed scientific research for its platform’s building blocks.</p>
                        </div>
                    </div>
                </div>
                <div className="empty-space-50"/>
                <div ref={this.howItWorks} className="container pt-5">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="big font-weight-normal mb-5 text-center">Learn more</h4>
                            <p className="max-width-px-450 mx-auto mb-5 text-center">This auction is being held by Wolfram Labs and you can participate in this event in a few easy steps:</p>
                            <div className="timeline pt-5">
                                <div className="pt-4"/>
                                <div className="timeline-item left">
                                    <TimeLineTitle title="CREATE ACCOUNT" />
                                    <p className="text-gray-darker mb-5">Participate in the event by registering on the website</p>
                                    <TimeLineImage image={illustration1} />
                                </div>
                                <div className="timeline-item right">
                                    <TimeLineTitle title="FUND YOUR ACCOUNT" />
                                    <p className="text-gray-darker mb-5">In order to bid, you will need funds in the form of ada (the cryptocurrency of the Cardano blockchain). Connect your crypto wallet and send a desired amount of Ada to the auction address which will be provided to you. This is your Auction Account. (Disclaimer on Security for users to fund the auction address)<br/><br/>Not sure how to obtain your wallet or to buy ada? Check out our Help section.</p>
                                    <TimeLineImage image={illustration2} />
                                </div>
                                <div className="timeline-item left">
                                    <TimeLineTitle title="PARTICIPATE IN THE AUCTION" />
                                    <p className="text-gray-darker mb-5">Bid on your desired items from your auction account.<br/><br/>Be sure to have adequate funding in your auction account to take part in the bidding. You can always top up the balance in your account by depositing more ADA.</p>
                                    <TimeLineImage image={illustration3} />
                                </div>
                                <div className="timeline-item right">
                                    <TimeLineTitle title="COLLECT" />
                                    <p className="text-gray-darker mb-5">When the auction ends, the NFT will be transferred to highest bidder´s wallet. You can build your collection by participating in subsequent Wolfram auctions.<br/><br/>Withdrawal of unused, deposited ada back to the user's crypto wallet will be done upon request 72 hours after the auction closes.</p>
                                    <TimeLineImage image={illustration4} />
                                </div>
                                <div className="pb-5"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="empty-space-130"/>
                <div className="container container--extended bck-black slider-items">
                    <div className="row">
                        <div className="col-12">
                            <div>
                                <h4 className="big font-weight-normal text-gray-medium mb-5 pl-4">The collection</h4>
                                <p className="max-width-px-700 mx-auto pb-5 mb-2">The Wolfram NFTs are unique representations of cellular automata (simple computational systems that are capable of exhibiting advanced behavior such as chaos and complexity).<br/><br/>The “Items from the Computational Universe” collection at the Wolfram Auction will represent Stephen Wolfram's first ever live minting event, an NFT-oriented event that merges art, science, popular culture and technology.</p>
                            </div>
                            <Carousel
                                responsive={responsive}
                                arrows={false}
                                showDots={true}
                                draggable={false}
                                // customDot={<CustomDot />}
                                renderButtonGroupOutside={true}
                                renderDotsOutside={<CustomDot />}
                                // customButtonGroup={<ButtonGroup />}
                            >
                                
                                {
                                    Object
                                        .keys(sliderItems)
                                        .map(key => <SliderItem key={key} item={sliderItems[key]} />)
                                }
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className="empty-space-130"/>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="font-weight-normal mb-5 pb-5">Experience the auction</h2>
                            <Link to="/sign-up" className="btn btn--big btn--gradient">Register now</Link>
                        </div>
                    </div>
                </div>
                <div className="empty-space-130"/>
                <Footer />
            </div>
        )
    }
}
export default LandingPage;