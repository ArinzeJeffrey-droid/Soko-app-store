import React from 'react'
import Img from "../../assets/img/party.png"

const OrderSuccess = () => {
    return (
    <div className="container mt-5 text-center">
        <div className="empty-img">
            <img src={Img} alt=""/>
        </div>
        <p className="bold mt-3">Thank you your order has been placed successfully</p>
        <p className="text-muted">You will receive a confirmation message as soon as the order is accepted.</p>
        <p className="text-muted">Order Number: <span className="bold">John - 271e</span>.</p>
        {/* <button className="btn buy mt-5 ms-2 mb-3">Back to home page</button> */}
        <div className="cartBtn-container justify-content-md-center mt-5 success-btn clear-padding row w-50 m-auto">
            <button className="btn add ms-md-2 me-md-2 mb-2  col-lg-4 col-md-4">Track order</button>
            <button className="btn buy ms-md-2 mb-2 col-lg-4 col-md-4">Continue shopping</button>
        </div>
    </div>
    );
}

export default OrderSuccess;