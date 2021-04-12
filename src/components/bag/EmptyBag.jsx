import React from 'react'
import Img from '../../assets/img/emoji.png'

const EmptyBag = () => {
    return (
    <div className="container mt-5 text-center">
        <div className="empty-img">
            <img src={Img} alt=""/>
        </div>
        <p className="bold mt-3">It's empty here</p>
        <p className="text-muted">Start shopping to add items to your bag.</p>
        <button className="btn buy mt-5 ms-2 mb-3">Back to home page</button>
    </div>
    );
}

export default EmptyBag;