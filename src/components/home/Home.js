import React from 'react';
import Navbar from "../shared/header/Navbar";
import Footer from "../shared/footer/Footer";
import FeaturedPartners from "./FeaturedPartners";
import PopularCategories from "./PopularCategories";

class Home extends React.Component {
    
    render() {
        return (
            <div>
                <Navbar { ...this.props } />
                <div className="empty-space-100"/>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h6 className="subheading pb-2 mb-4">CREATE, EXPLORE & COLLECT NFTs.</h6>
                            <h1 className="mb-5">The new creative economy. </h1>
                            <button className="btn btn--big btn--gradient">Start collecting</button>
                        </div>
                    </div>
                </div>
                <div className="empty-space-100"/>
                <FeaturedPartners />
                <div className="empty-space-100"/>
                <PopularCategories />
                <div className="empty-space-130"/>
                <Footer />
            </div>
        )
    }
}
export default Home;