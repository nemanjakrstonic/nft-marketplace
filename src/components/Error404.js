import React from 'react';
import Navbar from "./shared/header/Navbar";
import Footer from "./shared/footer/Footer";

export default class Error404 extends React.Component {
    
    render() {
        
        return (
            <div>
                <Navbar { ...this.props } />
                <div className="empty-space-130"/>
                <h1 className="text-center">404</h1>
                <div className="empty-space-130"/>
                <Footer />
            </div>
        )
    }
}