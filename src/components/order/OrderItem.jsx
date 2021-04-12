import React from 'react'

const OrderItem = () => {
    return (
    <div className="cart-item">
        <p className="bold mb-0">Earrings and Mangtikka</p>
        <p className="mt-0 text-muted small-text">per piece</p>
        <div className="flex">
            <div className="sum">
                <p className="mb-0">UGX 118,400</p>
                <p className="mt-0 text-muted small-text text-decoration-line-through">UGX 148,000</p>
            </div>
            <div className="addBtn-container med-height">
                <div className="ps-2 pe-2 act">&#8722;</div>
                <div className="ps-1 pe-1 num">1</div>
                <div className="ps-2 pe-2 act">&#43;</div>
            </div>
        </div>
    </div>
    );
}

export default OrderItem;