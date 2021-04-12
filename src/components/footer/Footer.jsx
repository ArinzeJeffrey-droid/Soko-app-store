import React from 'react'


const Footer = () => {
    return (
    <>
        <div className="services p-5 clear-padding container-fluid">
            <div className="services-container">
                <div className="service">
                    <i className="fas fa-truck"></i>
                    <p className="mt-3">Fast Delivery</p>
                </div>
                <div className="service">
                    <i className="fas fa-ribbon"></i>
                    <p className="mt-3">Buyer Protection</p>
                </div>
                <div className="service">
                    <i className="far fa-clock"></i>
                    <p className="mt-3">Customer Support</p>
                </div>
            </div>
        </div>
        <footer className="footer text-center mt-5 mb-3">
            <p className="text-muted">STORE DETAILS</p>
            <h4>Target</h4>
            <p>cham Towers, Plot 12 Nkruma Rd, kampala, Ug</p>
            <button className="chat-btn p-2 pe-3 ps-4"><span className="fab fa-whatsapp"></span> Chat With Us</button>
        </footer>
    </>
    );
}

export default Footer;