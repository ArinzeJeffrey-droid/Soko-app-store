import React, { useState } from 'react'
import Img from "../../assets/img/coming-2-america-poster-eddie-murphy-sequel.jpg"


const Product = () => {
    const [qty, setQty] = useState(1)
    const increaseQty = () => {
        setQty(qty++)
    }
    const decreaseQty = () => {
        setQty(qty--)
    }
    return (
        <div className="container product-description">
            <div className="row">
                <div className="col-lg-4 col-md-6 mt-3">
                    <div className="img-desc">
                        <img src={Img} alt=""/>
                    </div>
                    <div style="text-align:center" className="mt-3">
                        <span className="dot active-dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
                <div className="col-lg-7 col-md-6 mt-3">
                    <p className="bold mb-1 mt-2">Norbury Scandainavian Wood Leg Ottoman</p>
                    <p className="pt-0 mt-0 mb-5 text-muted">Sold as a piece, Wooden upholstered ottoman lends a laid-back
                        appeal to your indoor space. Comes with soft padding for extra comfort and support.
                        Solid wooden and metal frame ensures durable, long-lasting use. Great as a footrest or
                        extra seat when entertaining guest.
                    </p>
                    <h5 className="bold">UGX 118,400 <span className="ms-5 badge bg-danger">-20%</span></h5>
                    <p className="mt-0 text-muted small-text text-decoration-line-through">UGX 148,000</p>
                    <div className="addBtn-container">
                        <div onClick={increaseQty} className="ps-2 pe-2 act">&#8722;</div>
                        <div className="ps-1 pe-1 num">{qty}</div>
                        <div onClick={decreaseQty} className="ps-2 pe-2 act">&#43;</div>
                    </div>
                    <div className="cartBtn-container mt-5 clear-padding row">
                        <button className="btn add ms-2 mb-3 me-5 col-lg-3 col-md-4">Add to Bag</button>
                        <button className="btn buy ms-2 mb-3 col-lg-3 col-md-4">Buy now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;