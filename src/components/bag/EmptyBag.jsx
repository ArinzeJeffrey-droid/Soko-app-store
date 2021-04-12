import React from 'react'
import Img from '../../assets/img/emoji.png'
import { Link } from 'react-router-dom';
import CONSTANTS from "../../routes/common.json"


const EmptyBag = () => {
    return (
    <div className="container mt-5 text-center">
        <div className="empty-img">
            <img src={Img} alt=""/>
        </div>
        <p className="bold mt-3">It's empty here</p>
        <p className="text-muted">Start shopping to add items to your bag.</p>
        <Link to={CONSTANTS.ROUTES.HOME} className="btn buy mt-5 ms-2 mb-3">Back to home page</Link>
    </div>
    );
}

export default EmptyBag;