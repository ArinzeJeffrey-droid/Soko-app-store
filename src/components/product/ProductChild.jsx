import React from 'react'
import Img from '../../assets/img/show.jpg'

const ProductChild = ({ isDiscount }) => {
    return (
    <div class="col-md-2 related-prod">
        <div class={`rel-img ${isDiscount ? "position-relative" : ""}`}>
            { isDiscount ? (<span class="badge bg-danger position-absolute pos">-20%</span>) : null}
            <img src={Img} alt=""/>
        </div>
        <p class=" mt-3 bold">Holiday print flannel sheet set...</p>
    </div>
    );
}

export default ProductChild;