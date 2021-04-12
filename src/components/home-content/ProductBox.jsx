import React from 'react'
import Img from '../../assets/img/show.jpg'


const ProductBox = () => {
    return (
    <div className="box p-2 mb-2">
        <div className="img-box clear-padding col-md-2">
            <img src={Img} alt=""/>
        </div>
        <div className="product-info ms-3 col-md-10">
            <h6 className="category mt-2">Kid's 2pk Cloth Face Masks</h6>
            <p style={{marginBottom:"0"}} className="text-muted">UGX 185,000</p>
            <button className="add-btn ps-4 pe-4">	&#43; Add</button>
        </div>
    </div>
    );
}

export default ProductBox;