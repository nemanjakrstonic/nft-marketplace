import React, {useRef} from 'react';
import Navbar from "../shared/header/Navbar";
import Footer from "../shared/footer/Footer";
import {Link} from "react-router-dom";
import useOnScreen from "../helpers/IsVisible";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderItem from "./parts/SliderItem";
import Timer from "./parts/Timer";
import { getNFTs16 } from '../../services/list';

// Resources
import illustration1 from "../../assets/img/illustration1.svg";
import illustration2 from "../../assets/img/illustration2.svg";
import illustration3 from "../../assets/img/illustration3.svg";
import illustration4 from "../../assets/img/illustration4.svg";
import wlogo from "../../assets/img/wolfram-research-logo.svg";
// import sliderItems from '../../resources/slider-items';



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
        this.about = React.createRef()
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    executeScrollHowItWorks = () => this.howItWorks.current.scrollIntoView()
    executeScrollAbout = () => this.about.current.scrollIntoView()
    
    componentWillMount() {
        document.documentElement.classList.add('smooth-scroll');
    }
    componentWillUnmount() {
        document.documentElement.classList.remove('smooth-scroll');
    }
    componentDidMount() {
        if (this.props.location.hash === '#about') {
            this.executeScrollAbout();
        }
    
        getNFTs16().then(
            (result) => {
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
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.location.hash === '#about') {
            this.executeScrollAbout();
        }
    }
    
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
                            <p className="pb-3 mb-4">Wolfram Research and Wolfram Blockchain Labs presents our initial collection of NFTs built on the Cardano blockchain at our “Items from the Computational Universe” Auction.<br/><br/>We invite you to join the live event on 19th July, where the “Items from theComputational Universe” will be “live minted”, selected and represented asnon-fungibletokens (NFTs) on the Cardano blockchain. These NFTs will be made available on <Link to="LiveMinting.com" target="_blank" className="hover-effect-1">LiveMinting.com</Link> to some lucky people who have attended Wolfram Virtual Events orCardano Virtual Events for free. </p>
                            <Link to="/sign-up" className="btn btn--gradient mr-4">Register</Link>
                            <Link to="#" onClick={this.executeScrollHowItWorks} className="btn btn--white">Learn more</Link>
                        </div>
                        <div className="col-lg-6">
                            <div className="countdown text-center">
                                <Timer ends="06/28/2021 00:00:00 GMT-0000" />
                                <img src={wlogo} alt="" />
                                <p className="pb-4 mb-2">Powered by Cardano</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="empty-space-100"/>
                <div ref={this.about} className="pt-4">
                    <div className="container container--extended bck-gray bck-color-padding br-6 px-lg-5">
                        <div className="row">
                            <div className="col-12">
                                <h4 className="big font-weight-normal mb-5">ABOUT US</h4>
                                <h5 className="mb-3">Wolfram</h5>
                                <p className="mb-5">Founded by Stephen Wolfram in 1987, Wolfram Research is one of the world’s most respected computer, web, and cloud software companies — as well as a powerhouse of scientific and technical innovation. As pioneers in computation and computational knowledge, we have pursued a long-term vision to develop the science, technology, and tools to make computation an ever-more-potent force in today’s and tomorrow’s world.</p>
                                <h5 className="mb-3">Wolfram Blockchain Labs</h5>
                                <p className="mb-5">Wolfram Blockchain Labs provides distributed ledger technology ecosystems with the tools necessary to assist in the development of a wide variety of smart, contract-based applications. Wolfram Blockchain Labs is the DLT-focused subsidiary of Wolfram Research, Inc., creator of Mathematica, Wolfram|Alpha and the Wolfram Language. Wolfram is the leader in developing technology and tools that inject sophisticated computational intelligence into everything.</p>
                                <h5 className="mb-3">Cardano</h5>
                                <p className="mb-5">Cardano is a decentralized third-generation proof-of-stake blockchain platform. It distinguishes itself from other blockchains through a commitment to peer-reviewed scientific research for its platform’s building blocks.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="empty-space-50"/>
                <div ref={this.howItWorks} className="container pt-5">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="big font-weight-normal mb-5 text-center">How to participate</h4>
                            <p className="max-width-px-450 mx-auto mb-5 text-center">This auction is being held by Wolfram Labs and you can participate in this event in a few easy steps:</p>
                            <div className="timeline pt-5">
                                <div className="pt-4"/>
                                <div className="timeline-item left">
                                    <TimeLineTitle title="CREATE ACCOUNT" />
                                    <p className="text-gray-darker mb-5">Get started by <Link to="/login" className="hover-effect-1">registering</Link>.</p>
                                    <TimeLineImage image={illustration1} />
                                </div>
                                <div className="timeline-item right">
                                    <TimeLineTitle title="FUND YOUR ACCOUNT" />
                                    <p className="text-gray-darker mb-5">In order to bid, you need to deposit ada (thecryptocurrency of the Cardano blockchain) into theauction site.<br/><br/>Click “Deposit’ at the top of the screen totransferada to the auction site. Once your ada is on thesite, you can bid on NFTs. It may take a fewminutes for your ada to show up on the auctionsite. When it does, you are ready to bid.<br/><br/>Want to know how to obtain a wallet or to buy ada? <br/><Link to="/faq" className="hover-effect-1">Check out our Help section</Link>.</p>
                                    <TimeLineImage image={illustration2} />
                                </div>
                                <div className="timeline-item left">
                                    <TimeLineTitle title="PARTICIPATE IN THE AUCTION" />
                                    <p className="text-gray-darker mb-5">Click “Buy” in the main menu to go to the auction.<br/><br/>You can bid on as many NFTs as you like. Auctions can run over several days, so keep checking back to see how your bids are doing.<br/><br/>When you bid on an item, the amount of your bid will be deducted from your balance. If you are outbid on that item, your bid will be refunded back to your balance instantly.<br/><br/>Be sure to have adequate funding in your auction account to take part in the bidding. You can always top up the balance in your account by depositing more ada.</p>
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
                                <p className="max-width-px-700 mx-auto pb-5 mb-2">When an auction ends, the NFT will be transferred to highest bidder ́s collection. You can build your collection by participating in subsequent Wolfram auctions.<br/><br/>You can withdraw ada from you account at any time after a 72 hour grace period from the last bid you place in any auction.This is to ensure site security.</p>
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
                                        .keys(this.state.items)
                                        .map(key => <SliderItem key={key} item={this.state.items[key]} />)
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
                            <Link to="/login" className="btn btn--big btn--gradient">Register now</Link>
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