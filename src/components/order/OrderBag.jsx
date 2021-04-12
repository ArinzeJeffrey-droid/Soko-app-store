import React from 'react'
import OrderItem from './OrderItem';

const OrderBag = () => {
    return ( 
        <div className="col-lg-4 col-md-5 bag-section">
            <div className="container">
                <div className="mt-3 flex bag-container">
                    <p className="bag">Bag <span className="badge">0</span></p>
                    <p className="text-muted cursor text-decoration-underline">Clear bag</p>
                </div>
            </div>
            <div className="container mt-3">
                <OrderItem/>
                <OrderItem/>
                <div className="nav-border mt-3"></div>
            </div>
            <div className="container mt-3">
                <div className="total-panel flex">
                    <p className="bold">Subtotal</p>
                    <p className="text-muted">UGX 12,700</p>
                </div>
                <div className="total-panel flex">
                    <p className="bold">Delivery</p>
                    <p className="green bold">Free</p>
                </div>
                <div className="dotted mb-2"></div>
                <div className="total-panel mt-3 flex">
                    <p className="bold">Subtotal</p>
                    <p className="bold">UGX 12,700</p>
                </div>
                <p className="small-text text-muted fst-italic">Inclusive of all taxes</p>
                <div className="dotted mb-2"></div>
                <p className="bold green small-text">You are about to save UGX 27,400 on this order</p>
            </div>
        </div>
    );
}

export default OrderBag;