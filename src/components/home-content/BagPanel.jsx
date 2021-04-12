import React from 'react'
import Img from "../../assets/img/emoji.png"

const BagPanel = () => {
    return (
    <div className="col-lg-3 bag-wrapper border-right">
        <div className="mt-3 bag-container">
            <p className="bag">Bag <span className="badge">0</span></p>
        </div>
        <div className="emoji p-3">
            <div className="emoji-img">
                <img src={Img} alt=""/>
            </div>
            <p className="bold mb-0 mt-3">It's empty here</p>
            <p className="text-muted">Start shopping to add items to your bag</p>
        </div>
    </div>
    );
}

export default BagPanel;